import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
API = os.getenv("EMERGENT_LLM_KEY")

STYLE = (
    "Black and white editorial sports photograph, high-end basketball campaign style, "
    "dramatic studio sports lighting, crisp detail, clean plain very light grey seamless "
    "background, no rim, no crowd, no text, no watermark, realistic anatomy, athletic natural body. "
)

SHOTS = {
    "dunk": "A male streetball player with curly hair at the peak of an explosive one-handed dunk, flying diagonally across the frame toward the right, 3/4 side angle, right arm fully extended upward holding the ball high, body fully stretched mid-air, wearing a dark basketball jersey and shorts, full body visible, isolated on the plain light background.",
    "female": "A female basketball player with a ponytail in a low explosive dribbling stance, body leaning forward, ball low in her right hand near the floor, wearing a dark basketball jersey and shorts, full body visible, isolated on the plain light background.",
}

async def gen(name, prompt):
    chat = LlmChat(api_key=API, session_id=f"arclab-v3-{name}", system_message="You are an expert sports photographer.")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    text, images = await chat.send_message_multimodal_response(UserMessage(text=STYLE + prompt))
    if images:
        with open(f"/app/scripts/gen-{name}.png", "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(name, "OK", flush=True)
    else:
        print(name, "NO IMAGE:", (text or "")[:120], flush=True)

async def main():
    for name, prompt in SHOTS.items():
        try:
            await gen(name, prompt)
        except Exception as e:
            print(name, "ERROR:", str(e)[:200], flush=True)

asyncio.run(main())

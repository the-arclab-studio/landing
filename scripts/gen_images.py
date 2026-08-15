import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
API = os.getenv("EMERGENT_LLM_KEY")

STYLE = (
    "Black and white editorial sports photograph, high-end basketball campaign style "
    "(Nike/Adidas aesthetic), dramatic studio sports lighting, crisp detail, "
    "clean plain very light grey seamless background, no crowd, no text, no watermark. "
    "Realistic anatomy, athletic but natural body. "
)

SHOTS = {
    "hero": "A male basketball athlete at the peak of an explosive one-handed dunk, flying diagonally across the frame, 3/4 side angle, one arm fully extended upward holding the ball, body fully stretched, wearing modern dark basketball clothing. Full body visible, isolated on the plain light background.",
    "problema": "A male basketball player sitting alone on a bench after training, elbows on knees, head slightly down, tired and reflective, towel over shoulders, dark training clothes, minimal empty gym, moody but clean.",
    "club": "A lone male basketball player standing on an empty court seen from behind, holding a ball at his side, cinematic dark moody atmosphere, deep shadows, spotlight from above, dark background.",
    "metodo": "A male basketball player in a low explosive dribbling stance, body leaning forward, ball low near the floor, wearing dark basketball clothing, full body visible, isolated on the plain light background.",
}

async def gen(name, prompt):
    chat = LlmChat(api_key=API, session_id=f"arclab-{name}", system_message="You are an expert sports photographer.")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    msg = UserMessage(text=STYLE + prompt)
    text, images = await chat.send_message_multimodal_response(msg)
    if images:
        with open(f"/tmp/gen-{name}.png", "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(name, "OK", images[0]["mime_type"], flush=True)
    else:
        print(name, "NO IMAGE:", (text or "")[:120], flush=True)

async def main():
    for name, prompt in SHOTS.items():
        try:
            await gen(name, prompt)
        except Exception as e:
            print(name, "ERROR:", str(e)[:200], flush=True)

asyncio.run(main())

from pathlib import Path
import urllib.request
import wave
import struct
import math

base = Path('public/assets/images')
for folder in ['backgrounds', 'couples', 'girl', 'flowers', 'gallery', 'decorations']:
    (base / folder).mkdir(parents=True, exist_ok=True)

urls = [
    ('backgrounds/hero.webp', 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80'),
    ('couples/letter-scene.webp', 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80'),
    ('girl/portrait.webp', 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80'),
    ('flowers/roses.webp', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80'),
    ('gallery/memory-1.webp', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80'),
    ('gallery/memory-2.webp', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=1000&q=80'),
    ('gallery/memory-3.webp', 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80'),
    ('gallery/memory-4.webp', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80'),
    ('decorations/candle.webp', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80'),
]

for rel_path, url in urls:
    destination = base / rel_path
    if not destination.exists():
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as response:
            destination.write_bytes(response.read())

music_dir = Path('public/assets/music')
music_dir.mkdir(parents=True, exist_ok=True)
audio_path = music_dir / 'romance.wav'
if not audio_path.exists():
    sample_rate = 22050
    duration = 6.0
    frequency = 440.0
    amplitude = 12000
    with wave.open(str(audio_path), 'wb') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        frames = []
        for i in range(int(sample_rate * duration)):
            t = i / sample_rate
            value = int(
                amplitude
                * (
                    0.6 * math.sin(2 * math.pi * frequency * t)
                    + 0.25 * math.sin(2 * math.pi * frequency * 1.5 * t)
                )
            )
            frames.append(struct.pack('<h', value))
        wav_file.writeframes(b''.join(frames))

print('Asset download complete')

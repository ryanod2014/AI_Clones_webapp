/**
 * CTS Prompt Pack - Scene prompts organized by category
 * Each prompt is designed for AI avatar scene generation
 */

export const PROMPT_CATEGORIES = [
  {
    id: 'studio',
    name: 'Studio',
    prompts: [
      {
        id: 'studio-1',
        name: 'Studio #1 - Modern Interview',
        prompt: `Create a cinematic portrait of [the person in the provided image] seated in a modern, softly lit interview studio.
The background should feature a dark, sophisticated interior with a mix of warm and cool lighting:
– A dimly lit wall with textured concrete or matte panels behind.
– A mid-century modern credenza or wooden sideboard with art sculptures and a warm desk lamp on it.
– A tall vertical neon light glowing in soft red or pink on one side.
– A large window in the background letting in cool daylight filtered through green trees.
– Include hints of film equipment like a microphone stand or light rig, subtly visible to suggest a professional filming setup.
Lighting should be cinematic and balanced:
– A soft key light from the front-left illuminating the subject's face.
– A cool rim light from the opposite side to create depth.
– Warm ambient light from the desk lamp behind for contrast.
Style the setting as a modern, elegant interview or creative studio — cozy yet professional, with rich textures (leather chair, wood, matte wall, glass window).
Depth of field should be shallow, keeping the subject sharp and the background softly blurred for a cinematic portrait look.
Mood: introspective, intelligent, confident.
Color palette: deep blues, warm ambers, soft daylight tones.`
      },
      {
        id: 'studio-2',
        name: 'Studio #2 - Scandinavian Creative',
        prompt: `Create a cinematic portrait of [the person in the image] seated in a Scandinavian-inspired creative studio.
The background should feature a bright, airy, and minimalist interior:
– Clean white walls with a single, large piece of abstract art in muted tones.
– Light oak wood furniture, including a sleek desk and a simple bookshelf with curated design books and a small potted plant.
– A large, floor-to-ceiling window letting in abundant, soft, diffused daylight.
– A simple, elegant floor lamp with a linen shade providing a touch of warmth.
– Neutral textiles, such as a pale gray wool rug and a simple linen cushion on the chair.
Lighting should be soft and naturalistic:
– A large, soft key light from the window on the right, creating gentle, flattering shadows.
– A white reflector board on the left, subtly filling in shadows to maintain an airy feel.
– Minimal backlight, emphasizing the clean, natural look.
Style the setting as a calm, creative sanctuary — minimalist yet warm, with textures like natural wood grain, linen, wool, and matte white walls.
Depth of field should be moderately shallow, keeping the subject crisp while the background details are softly defined.
Mood: calm, intelligent, creative, focused.
Color palette: whites, light beige, pale gray, natural wood tones.`
      },
      {
        id: 'studio-3',
        name: 'Studio #3 - Industrial Loft',
        prompt: `Generate a portrait of [the person] in a dark, industrial loft studio.
The background should feature a raw, textured, and masculine environment:
– An exposed brick wall with aged, imperfect mortar, serving as the primary backdrop.
– Black steel shelving units holding vintage camera gear, heavy books, and metal objects.
– Edison bulbs hanging from thick, visible black cables at varying heights, casting a warm glow.
– A polished concrete floor with subtle reflections.
– A large, multi-paned industrial window showing a glimpse of a gritty city street outside.
Lighting should be warm and dramatic:
– A key light from a warm-gelled softbox, positioned high and to the side to create defined shadows.
– A subtle blue or steel-toned kicker light from behind, catching the edge of the subject's hair and shoulder.
– The Edison bulbs in the background should provide a warm, ambient glow and create bokeh.
Style the setting as a cinematic, gritty, and confident workspace, with textures of rough brick, cold steel, smooth concrete, and warm tungsten light.
Depth of field should be shallow, focusing sharply on the subject and turning the hanging bulbs into soft orbs of light.
Mood: cinematic, gritty, confident, artistic.
Color palette: deep browns, charcoal, amber, hints of steel blue.`
      },
      {
        id: 'studio-4',
        name: 'Studio #4 - Futuristic Broadcast',
        prompt: `Create a portrait of [the person] in a futuristic high-tech broadcast studio.
The background should feature a sleek, dynamic, and glowing environment:
– A wall of seamless LED panels displaying abstract, slowly moving data visualizations in cool tones.
– Geometric, angular wall panels with integrated, soft glowing light strips.
– A polished, dark gray floor that reflects the light from the screens and panels.
– A minimalist, glossy black table or console in front of the subject.
– Subtle hints of a camera on a robotic arm, out of focus in the foreground.
Lighting should be futuristic and clean:
– A large, soft key light with a slight blue or cyan tint from the front.
– A magenta or violet rim light from behind to create a vibrant, colorful separation.
– The LED panels should provide a dynamic, moving ambient light that creates subtle reflections on polished surfaces.
Style the setting as a sleek, professional, high-end tech broadcast environment, with textures of polished gloss surfaces, matte metals, and glowing light.
Depth of field should be very shallow, keeping the subject perfectly in focus while the background graphics are beautifully blurred.
Mood: visionary, innovative, sleek, professional.
Color palette: dark gray, cyan, violet, black.`
      },
      {
        id: 'studio-5',
        name: 'Studio #5 - Vintage Scholar',
        prompt: `Place [the person] in a vintage scholar's study.
The background should feature a rich, intellectual, and timeless atmosphere:
– Floor-to-ceiling dark wood bookshelves filled with old, leather-bound books with gold lettering.
– A large, ornate dark wood desk with a green leather inlay, featuring a vintage globe and a brass desk lamp.
– Framed antique maps and anatomical charts on any visible wall space.
– A heavy, velvet curtain in a deep jewel tone (emerald or burgundy) partially drawn over a window.
– A corner of a Persian rug visible on the dark hardwood floor.
Lighting should be warm and intimate:
– A warm, focused key light originating from the brass desk lamp, creating a classic, moody illumination.
– A very soft, low fill light to bring out detail in the shadows, as if from a fireplace just out of frame.
– A subtle backlight catching the dust motes in the air and the edges of the books.
Style the setting as an introspective, intellectual sanctuary, rich with textures of aged leather, polished wood, old paper, and velvet.
Depth of field should be shallow, with the focus on the subject, while the rows of books behind them blur into a tapestry of color and gold.
Mood: introspective, intellectual, timeless, wise.
Color palette: rich browns, deep greens, muted golds, sepia tones.`
      },
      {
        id: 'studio-6',
        name: 'Studio #6 - Modern Art Gallery',
        prompt: `Generate a portrait of [the person] sitting in a modern art gallery.
The background should feature a minimalist, sophisticated, and thought-provoking space:
– Expansive, minimalist concrete or stark white walls, providing a neutral canvas.
– A single, very large, colorful abstract painting that serves as the main background element.
– High ceilings with visible gallery track lighting, with spotlights focused on the artwork.
– Polished concrete or light wood flooring that reflects the gallery lights.
– The distant, blurred silhouette of another gallery visitor or a piece of sculpture.
Lighting should be clean and directional:
– A bright, slightly diffused key light from a gallery spotlight above and to the side, creating a defined, artistic look.
– A soft fill light bounced off a nearby white wall to gently lift the shadows.
– The colorful painting in the background should cast a subtle, colored ambient light onto the back of the subject.
Style the setting as a creative, sophisticated, and avant-garde space, emphasizing textures of matte concrete, glossy paint, and polished floors.
Depth of field should be shallow, keeping the subject sharp while the details of the painting behind them are soft and impressionistic.
Mood: creative, sophisticated, contemplative, modern.
Color palette: neutral grays and whites with bold color accents from the paintings.`
      },
      {
        id: 'studio-7',
        name: 'Studio #7 - Cozy Podcast',
        prompt: `Create a portrait of [the person] in a cozy home podcast studio.
The background should feature a warm, authentic, and personalized setup:
– Warm wooden shelves filled with a mix of books, personal mementos, and small, leafy plants.
– A large, professional microphone on a boom arm positioned near the subject.
– A wall section covered in dark gray or charcoal acoustic foam panels for texture and authenticity.
– A string of warm, Edison-style fairy lights draped across the shelves, creating a soft glow.
– A coffee mug, a small monitor screen displaying audio waveforms, and a notebook on the desk.
Lighting should be soft and inviting:
– A warm-toned key light from a small softbox or a ring light, creating a friendly and engaging illumination.
– The string lights in the background should provide a warm, ambient glow and create beautiful bokeh.
– A subtle hair light from above to add separation from the darker background elements.
Style the setting as a welcoming, authentic, and conversational space, with textures of natural wood, soft acoustic foam, paper, and ceramic.
Depth of field should be shallow, focusing on the subject and the microphone, while the books and lights blur into a cozy backdrop.
Mood: welcoming, authentic, conversational, passionate.
Color palette: soft oranges, browns, charcoal gray, and off-white.`
      },
      {
        id: 'studio-8',
        name: 'Studio #8 - Executive Broadcast',
        prompt: `Depict [the person] in a high-end executive broadcast studio.
The background should feature a powerful, refined, and urban environment:
– A massive, floor-to-ceiling window offering a panoramic view of a city skyline during the day.
– A sleek, minimalist marble or dark glass table in front of the subject.
– A single, iconic designer chair in black leather or chrome.
– Metallic accents in the form of brushed steel or chrome trim on the walls and furniture.
– A large, out-of-focus television screen on a side wall displaying a subtle logo or news graphic.
Lighting should be clean and professional:
– A large, soft, diffused key light from the front, mimicking the soft light from the large window.
– A cool-toned fill light to balance the daylight and maintain a professional, clean look.
– The city skyline should provide a bright, slightly cool-toned backlight that outlines the subject's silhouette.
Style the setting as a powerful, calm, and refined command center, with textures of polished marble, smooth leather, cool glass, and brushed metal.
Depth of field should be shallow, keeping the subject sharp and rendering the distant city skyline into a soft, impressive vista.
Mood: powerful, calm, refined, authoritative.
Color palette: gray, black, silver, deep navy.`
      },
      {
        id: 'studio-9',
        name: 'Studio #9 - Retro 70s TV',
        prompt: `Create a cinematic portrait of [the person] in a retro 1970s-style TV studio.
The background should feature a nostalgic, warm, and textured setting:
– Wood-paneled walls in a warm walnut or teak finish.
– A vintage record player on a mid-century modern credenza, with classic album covers displayed nearby.
– A low-slung sofa or armchair upholstered in a fabric with a geometric pattern in earth tones.
– A shag pile rug in a bold color like burnt orange or olive green.
– A large, potted monstera or snake plant in a ceramic planter.
Lighting should be warm and atmospheric:
– A warm, golden-toned key light from a slightly hard source, mimicking vintage tungsten lights.
– A soft, warm fill light to keep the shadows from being too harsh.
– A subtle vignette effect, darkening the edges of the frame to enhance the retro feel.
Style the setting as a nostalgic, artistic, and relaxed conversation pit, with textures of wood grain, patterned fabric, shag carpet, and vinyl.
Depth of field should be moderately shallow, with a slight softness to the overall image to evoke a vintage film look.
Mood: nostalgic, artistic, relaxed, charismatic.
Color palette: burnt orange, olive green, walnut brown, mustard yellow.`
      },
      {
        id: 'studio-10',
        name: 'Studio #10 - Editorial Photo',
        prompt: `Place [the person] in a modern editorial photography studio.
The background should feature a clean, professional, and versatile environment:
– A large, seamless white or light gray cyclorama wall, creating an infinite background effect.
– Professional lighting equipment, such as a large octabox softbox and a reflector, clearly visible in the frame.
– A simple prop for the subject, like a minimalist stool, an Eames-style armchair, or an apple box.
– Polished concrete floors reflecting the soft light from the equipment.
– Cables and sandbags neatly arranged on the floor, adding a touch of behind-the-scenes authenticity.
Lighting should be high-key and flattering:
– A very large, diffused key light (the octabox) providing soft, even illumination with minimal shadows.
– A large white bounce card or V-flat providing clean fill light from the opposite side.
– A hair light on a boom arm above and behind the subject to create separation from the white background.
Style the setting as a confident, elegant, and professional creative space, with textures of matte paper, polished concrete, and metal light stands.
Mood: confident, elegant, professional, direct.
Color palette: white, light gray, black, with minimal color contrast.`
      }
    ]
  },
  {
    id: 'office',
    name: 'Office',
    prompts: [
      {
        id: 'office-1',
        name: 'Office #1 - Penthouse Sunset',
        prompt: `Create a cinematic portrait of [the person in the image] seated in a luxury penthouse office overlooking a city skyline at sunset.
The background should feature a breathtaking, powerful, and serene view:
– Floor-to-ceiling windows that wrap around the corner of the building, offering a 180-degree view.
– A sleek, minimalist desk made of dark wood and marble, with only a laptop and a single, elegant pen on it.
– A high-backed, black leather ergonomic chair.
– A large, abstract painting on the far wall with colors that complement the sunset.
– The city lights outside are just beginning to glow in golden and amber hues as the sky deepens to indigo.
Lighting should be a dramatic mix of natural and artificial:
– A soft, warm key light from the direction of the setting sun, casting a golden glow on the subject's face.
– A cool-toned rim light from the interior office lights behind them, separating them from the window.
– The glowing city lights should create a beautiful, soft bokeh effect in the background.
Style the setting as a modern, visionary command post, with textures of cool glass, warm marble, smooth leather, and the distant glow of the city.
Depth of field should be shallow, keeping the subject in sharp focus while the city skyline transforms into a mesmerizing, blurred tapestry of light.
Mood: powerful, calm, visionary, successful.
Color palette: deep navy, marble white, gold reflections, dusk blue.`
      },
      {
        id: 'office-2',
        name: 'Office #2 - Glass Boardroom',
        prompt: `Generate a portrait of [the person] in a contemporary glass-walled corporate boardroom.
The background should feature a professional, transparent, and collaborative environment:
– Walls made of floor-to-ceiling frosted or clear glass, revealing silhouettes of colleagues in the outer office.
– A long, polished dark wood or glass boardroom table reflecting the overhead lights.
– A row of sleek, ergonomic mesh-backed chairs neatly arranged around the table.
– A large, digital presentation screen on the far wall, softly glowing with a neutral blue corporate graphic or chart.
– A minimalist centerpiece on the table, such as a simple orchid or a sleek water carafe.
Lighting should be bright and even:
– A soft, diffused key light from recessed ceiling panels, creating a clean, professional look.
– Subtle reflections from the glass walls and table providing a natural fill light.
– A gentle backlight from the ambient light of the outer office, seen through the glass walls.
Style the setting as a modern, success-oriented hub of decision-making, with textures of polished glass, smooth wood, brushed aluminum, and fine mesh.
Depth of field should be shallow, focusing on the subject at the head of the table, with the rest of the room and the outer office softly blurred.
Mood: professional, confident, strategic, collaborative.
Color palette: cool grays, white, silver-blue, dark wood.`
      },
      {
        id: 'office-3',
        name: 'Office #3 - Executive Library',
        prompt: `Depict [the person] in an old-world executive office lined with a private library.
The background should feature a wise, established, and scholarly atmosphere:
– Dark mahogany or cherry wood paneling and built-in bookshelves covering the walls.
– Shelves filled with classic, leather-bound legal or financial texts, exuding a sense of history and knowledge.
– A large, antique partner's desk with a green banker's lamp providing a warm glow.
– A marble fireplace mantel with a small, crackling fire visible.
– Deep burgundy or forest green leather wingback chairs.
Lighting should be warm and traditional:
– A warm, focused key light from the banker's lamp, creating a cozy, intimate feel.
– Soft fill light from the fireplace glow, adding warmth to the shadows.
– Subtle window light filtering through heavy drapes, providing a touch of cool contrast.
Style the setting as a powerful, wise, and established sanctuary of knowledge, with textures of polished wood, aged leather, marble, and flickering firelight.
Depth of field should be shallow, with the subject sharp and the rows of books creating a rich, colorful blur behind.
Mood: wise, established, trustworthy, powerful.
Color palette: deep burgundy, forest green, mahogany brown, warm gold.`
      },
      {
        id: 'office-4',
        name: 'Office #4 - Startup Loft',
        prompt: `Create a portrait of [the person] in an energetic, open-plan startup loft office.
The background should feature a vibrant, creative, and dynamic environment:
– Exposed brick walls adorned with motivational posters and a large whiteboard covered in brainstorming notes.
– Clusters of colorful, modern desks with dual monitors, scattered with coffee cups and sticky notes.
– Exposed ductwork and industrial pipes painted in a bright accent color.
– A relaxed lounge area with bean bags and a ping-pong table visible in the distance.
– Large, industrial windows letting in abundant natural light.
Lighting should be bright and energetic:
– A large, soft key light from the industrial windows, creating a fresh, open feel.
– Subtle, colorful accent lights from neon signs or LED strips reflecting off the brick.
– The natural light should create interesting shadows and highlights from the industrial elements.
Style the setting as an innovative, ambitious, and collaborative hub, with textures of raw brick, painted metal, recycled wood, and colorful fabric.
Depth of field should be moderately shallow, keeping the subject in focus while the busy office activity blurs into an energetic backdrop.
Mood: innovative, ambitious, energetic, collaborative.
Color palette: warm brick red, teal accents, natural wood, white.`
      },
      {
        id: 'office-5',
        name: 'Office #5 - Minimalist Japanese',
        prompt: `Generate a portrait of [the person] in a serene, minimalist Japanese-inspired office.
The background should feature a tranquil, focused, and elegant space:
– Walls finished in a soft, textured plaster or washi paper in natural off-white.
– Simple, low-profile furniture in light natural wood (ash or maple) with clean lines.
– A single, beautiful bonsai tree or a simple ikebana flower arrangement as the focal point.
– Shoji screens or rice paper panels diffusing soft, natural light from a window.
– A tatami mat or a simple, woven natural fiber rug on the floor.
Lighting should be soft and zen-like:
– A large, very soft key light diffused through the shoji screens, creating an ethereal glow.
– Minimal fill light, allowing for soft, natural shadows that add depth.
– No harsh highlights; the light should feel calm and meditative.
Style the setting as a focused, harmonious, and mindful space for deep work, with textures of smooth plaster, natural wood grain, woven fibers, and delicate paper.
Depth of field should be moderately shallow, with a calm, uncluttered background that doesn't distract from the subject.
Mood: serene, focused, mindful, elegant.
Color palette: off-white, light wood, soft green from plants, black accents.`
      },
      {
        id: 'office-6',
        name: 'Office #6 - Creative Agency',
        prompt: `Depict [the person] in a vibrant, eclectic creative agency office.
The background should feature an inspiring, playful, and artistic environment:
– Walls covered with mood boards, concept art, and inspiring photography.
– Mismatched vintage and modern furniture in bold, unexpected colors.
– A large, communal table scattered with design materials, markers, and sketchbooks.
– Hanging plants in macrame planters and quirky desk lamps.
– An old-school jukebox or a vintage arcade machine in the corner.
Lighting should be dynamic and colorful:
– A mix of warm and cool light sources creating a dynamic, textured look.
– Colored accent lights (perhaps from a neon sign or a colored lamp) adding pops of vibrant hue.
– Natural light from large windows mixing with the artificial sources.
Style the setting as a bold, imaginative, and unconventional creative playground, with textures of worn leather, bright painted surfaces, vintage metal, and lush greenery.
Depth of field should be shallow, focusing on the subject while the eclectic background becomes a colorful, abstract mosaic.
Mood: creative, playful, bold, unconventional.
Color palette: bold primary colors mixed with pastels and natural greens.`
      },
      {
        id: 'office-7',
        name: 'Office #7 - Law Firm',
        prompt: `Create a portrait of [the person] in a prestigious, traditional law firm office.
The background should feature a dignified, authoritative, and classic environment:
– Floor-to-ceiling mahogany bookshelves filled with law reporters and legal treatises.
– A large, imposing partner's desk with a leather blotter and antique inkwell.
– Heavy, damask or velvet drapes in a deep blue or burgundy framing tall windows.
– Framed diplomas, bar admissions, and portraits of firm founders on the walls.
– A small seating area with button-tufted leather Chesterfield sofas.
Lighting should be classic and refined:
– A warm key light from a traditional brass desk lamp, casting a focused glow.
– Soft ambient light from wall sconces, providing a gentle fill.
– Subtle daylight filtering through the heavy drapes, adding a touch of cool contrast.
Style the setting as a space of integrity, authority, and tradition, with textures of rich leather, polished brass, heavy fabric, and aged paper.
Depth of field should be shallow, with the subject sharp against a softly blurred background of books and classic furniture.
Mood: authoritative, trustworthy, dignified, classic.
Color palette: deep navy, burgundy, mahogany, polished brass.`
      },
      {
        id: 'office-8',
        name: 'Office #8 - Tech Giant',
        prompt: `Generate a portrait of [the person] in a sleek, modern tech company headquarters.
The background should feature an innovative, cutting-edge, and sophisticated environment:
– A vast, open-plan space with minimalist white and glass architecture.
– A curved, futuristic staircase or a sculptural ceiling installation in the background.
– Clusters of modern, ergonomic workstations with large monitors.
– A living green wall or a large indoor tree providing a touch of nature.
– Subtle branding elements, like the company's logo etched into glass or displayed on a large screen.
Lighting should be clean and futuristic:
– A large, diffused key light from expansive skylights or recessed ceiling panels.
– Cool-toned accent lights integrated into the architecture.
– Subtle green reflections from the living wall, adding an organic touch.
Style the setting as an innovative, optimistic, and world-changing environment, with textures of smooth glass, white surfaces, cool metal, and lush green foliage.
Depth of field should be moderately shallow, keeping the subject in focus while the grand architecture and greenery provide an impressive, slightly blurred backdrop.
Mood: innovative, optimistic, intelligent, impactful.
Color palette: white, glass-blue, cool gray, vibrant green.`
      },
      {
        id: 'office-9',
        name: 'Office #9 - Trading Floor',
        prompt: `Depict [the person] on a high-energy financial trading floor.
The background should feature an intense, fast-paced, and data-rich environment:
– Rows of trading desks with multiple large monitors displaying real-time stock tickers, charts, and financial data.
– Blurred silhouettes of traders in motion, creating a sense of urgency and activity.
– Large, overhead digital ticker displays scrolling across the room.
– A mix of ambient overhead lighting and the glow from countless computer screens.
– Scattered papers, coffee cups, and stress balls on the desks.
Lighting should be cool and intense:
– A cool-toned key light from the glow of the surrounding monitors, casting a slightly bluish hue on the subject.
– Minimal fill light, allowing for some dramatic shadows that convey intensity.
– The flickering light from the data screens should add a dynamic, almost chaotic quality.
Style the setting as a high-stakes, decisive, and adrenaline-fueled arena, with textures of glossy screens, plastic keyboards, and rumpled paper.
Depth of field should be very shallow, isolating the subject sharply while the screens and activity behind them become an abstract blur of light and data.
Mood: intense, decisive, high-energy, focused.
Color palette: cool blues, greens from screens, black, with red and green data accents.`
      },
      {
        id: 'office-10',
        name: 'Office #10 - Future CEO',
        prompt: `Create a portrait of [the person] in a futuristic, holographic executive suite.
The background should feature a visionary, powerful, and technologically advanced environment:
– Transparent, interactive holographic displays floating in mid-air, showing global maps, data streams, and corporate metrics.
– A sleek, levitating desk made of a dark, polished composite material.
– A high-backed chair that seems molded from a single piece of futuristic material.
– A large, curved window with a view of a futuristic cityscape with flying vehicles or a space station.
– Subtle, integrated lighting in the walls that glows in cool blues and purples.
Lighting should be futuristic and otherworldly:
– A soft, diffused key light with a slight cyan or violet tint.
– The holographic displays should provide a dynamic, multi-colored ambient light.
– A cool, distant backlight from the futuristic view outside the window.
Style the setting as a space of ultimate power, vision, and innovation, beyond the present day, with textures of smooth composites, glowing light, and transparent displays.
Depth of field should be shallow, focusing on the subject while the holographic data and futuristic city blur into a high-tech, impressive backdrop.
Mood: visionary, forward-thinking, confident, intelligent.
Color palette: silver, cyan, white, graphite.`
      }
    ]
  },
  {
    id: 'beach',
    name: 'Beach & Retreats',
    prompts: [
      {
        id: 'beach-1',
        name: 'Beach #1 - Sunrise Deck',
        prompt: `Create a cinematic portrait of [the person in the image] on a quiet beachfront deck at sunrise.
The background should feature a serene, hopeful, and natural setting:
– A weathered wooden deck with a simple, comfortable armchair upholstered in white linen.
– Sheer, off-white linen curtains tied to the deck posts, fluttering gently in the morning breeze.
– A few large, terracotta pots with lush green palms and tropical flowers.
– The soft, glistening ocean waves in the background, with the sun just cresting the horizon.
– A glass of orange juice or a cup of tea on a small side table.
Lighting should be warm and ethereal:
– A warm, golden key light from the rising sun, casting a soft glow on the subject's face.
– A subtle backlight from the sun's reflection on the water, creating a gentle halo effect.
– The white linen and light wood of the deck act as natural reflectors, providing soft fill light.
Style the setting as a peaceful, natural, and luxurious retreat, with textures of weathered wood, soft linen, green leaves, and glistening water.
Depth of field should be shallow, keeping the subject sharp while the sunrise and ocean blur into a beautiful, soft-focus backdrop.
Mood: hopeful, grounded, peaceful, renewed.
Color palette: soft peach, sand beige, sky blue, warm gold.`
      },
      {
        id: 'beach-2',
        name: 'Beach #2 - Ocean Cliff Office',
        prompt: `Generate a portrait of [the person] in a modern glass-walled office perched above ocean cliffs.
The background should feature an expansive, minimalist, and awe-inspiring view:
– Floor-to-ceiling glass walls offering a panoramic, uninterrupted view of the vast ocean and sky.
– A minimalist white or light oak desk with only a sleek laptop and a single stone paperweight.
– Soft, sheer white curtains hanging from the ceiling, blowing slightly in the ocean breeze.
– Polished concrete floors that subtly reflect the sky and ocean colors.
– A distant view of waves crashing against the base of the cliffs far below.
Lighting should be bright and airy:
– A large, cool-toned key light from the abundant, indirect daylight pouring through the glass walls.
– A warm fill light from a simple, elegant floor lamp inside the office to balance the coolness of the ocean light.
– The bright sky and ocean provide a natural, expansive backlight.
Style the setting as a visionary, elevated, and modern workspace, with textures of cool glass, smooth concrete, light wood, and flowing sheer fabric.
Depth of field should be moderately shallow, keeping the subject in focus while the vast ocean view remains recognizable but softly defined.
Mood: visionary, elevated, expansive, clear-minded.
Color palette: soft blue-gray, ivory, light oak, pale aqua.`
      },
      {
        id: 'beach-3',
        name: 'Beach #3 - Bonfire Sunset',
        prompt: `Depict [the person] leading a talk by a beach bonfire at sunset.
The background should feature a communal, authentic, and inspiring atmosphere:
– A vibrant sunset sky with colors fading from fiery orange and pink to deep indigo.
– A small, crackling bonfire in a fire pit, with glowing embers and dancing flames.
– The gentle, dark waves of the ocean lapping at the shore in the background.
– A few scattered candle lanterns and tiki torches creating additional pools of warm light.
– The blurred silhouettes of an engaged audience sitting on logs or blankets around the fire.
Lighting should be warm and dramatic:
– A warm, flickering key light from the bonfire, casting dynamic, dancing shadows on the subject's face.
– The deep, ambient light from the twilight sky providing a cool, dark blue fill.
– The candle lanterns and torches in the background should create beautiful, warm bokeh.
Style the setting as an authentic, inspiring, and connective gathering, with textures of rough sand, weathered wood, warm flames, and cool ocean.
Depth of field should be shallow, focusing on the subject and the fire, while the audience and sunset become an impressionistic, emotive backdrop.
Mood: inspiring, authentic, connected, passionate.
Color palette: fiery orange, sunset pink, deep indigo, warm amber.`
      }
    ]
  },
  {
    id: 'city',
    name: 'City Views',
    prompts: [
      {
        id: 'city-1',
        name: 'City #1 - Rooftop Night',
        prompt: `Create a cinematic portrait of [the person] on an urban rooftop at night.
The background should feature a dramatic cityscape with twinkling lights:
– A panoramic view of a glittering city skyline with skyscrapers and illuminated buildings.
– Subtle rooftop elements like a water tower or air conditioning units adding urban texture.
– String lights or lanterns providing warm accent lighting on the rooftop.
– The night sky with a hint of stars visible above the city glow.
Lighting should be dramatic and urban:
– Cool-toned city lights providing ambient illumination from behind.
– A warm key light from the string lights or a portable light source.
– Subtle rim lighting from the city glow creating separation from the background.
Style the setting as aspirational, urban, and sophisticated.
Mood: ambitious, confident, metropolitan, visionary.
Color palette: deep navy, warm amber from lights, cool blue city glow.`
      },
      {
        id: 'city-2',
        name: 'City #2 - Penthouse View',
        prompt: `Generate a portrait of [the person] in a modern penthouse with floor-to-ceiling windows.
The background should feature a stunning city view:
– Expansive glass windows showcasing the city skyline at dusk.
– Minimalist, luxurious furniture in neutral tones.
– Subtle reflections of the city lights in the polished floor.
– The transition of colors in the sky from warm sunset to cool evening.
Lighting should be sophisticated:
– Natural dusk light creating a warm glow on the subject.
– Cool city lights providing ambient background illumination.
– Interior accent lighting adding warmth and depth.
Style the setting as successful, refined, and cosmopolitan.
Mood: accomplished, serene, powerful, elegant.
Color palette: dusk orange, steel blue, warm neutrals, gold accents.`
      },
      {
        id: 'city-3',
        name: 'City #3 - Café Window',
        prompt: `Depict [the person] at a café window overlooking a bustling city street.
The background should feature urban life in motion:
– A large window with a view of people walking, cars passing, and storefronts.
– Warm café interior with exposed brick or wood paneling.
– A coffee cup or laptop on the table in front of the subject.
– Soft bokeh of street lights and passing headlights.
Lighting should be warm and inviting:
– Soft, warm interior lighting from pendant lamps.
– Cool daylight or evening light filtering through the window.
– Dynamic reflections from street activity.
Style the setting as creative, connected, and cosmopolitan.
Mood: thoughtful, inspired, urban, engaged.
Color palette: warm wood tones, cream, cool gray, hints of neon.`
      }
    ]
  },
  {
    id: 'nature',
    name: 'Nature & Outdoors',
    prompts: [
      {
        id: 'nature-1',
        name: 'Nature #1 - Forest Clearing',
        prompt: `Create a portrait of [the person] in a sunlit forest clearing.
The background should feature a natural, serene environment:
– Tall trees with dappled sunlight filtering through the canopy.
– Lush green ferns and wildflowers carpeting the forest floor.
– Soft, diffused golden light creating a magical atmosphere.
– A subtle mist or light rays visible in the air.
Lighting should be natural and ethereal:
– Warm, golden key light from the sun filtering through trees.
– Soft, green-tinted fill light bounced from the foliage.
– Rim lighting from backlit leaves creating a halo effect.
Style the setting as peaceful, grounded, and authentic.
Mood: serene, connected, wise, grounded.
Color palette: forest green, golden yellow, earth brown, soft white light.`
      },
      {
        id: 'nature-2',
        name: 'Nature #2 - Mountain Vista',
        prompt: `Generate a portrait of [the person] with a mountain backdrop.
The background should feature dramatic natural scenery:
– Majestic mountain peaks with snow-capped summits.
– Rolling valleys with forests or meadows below.
– Clear blue sky with wispy clouds.
– Sense of vast scale and natural grandeur.
Lighting should be crisp and natural:
– Clear, bright daylight creating defined shadows.
– Cool, atmospheric light from the mountain air.
– Warm accent from direct sunlight on the subject.
Style the setting as adventurous, ambitious, and inspiring.
Mood: adventurous, free, ambitious, inspired.
Color palette: mountain blue, snow white, forest green, earth tones.`
      },
      {
        id: 'nature-3',
        name: 'Nature #3 - Lake Reflection',
        prompt: `Depict [the person] by a calm mountain lake at golden hour.
The background should feature tranquil natural beauty:
– Still water reflecting the surrounding mountains and sky.
– Pine trees framing the scene on either side.
– Warm golden light from the setting sun.
– Subtle mist rising from the water surface.
Lighting should be warm and reflective:
– Golden hour key light casting long, warm shadows.
– Reflected light from the water providing fill.
– Soft, atmospheric glow throughout the scene.
Style the setting as contemplative, peaceful, and majestic.
Mood: reflective, peaceful, majestic, centered.
Color palette: golden amber, deep blue, forest green, soft pink sky.`
      }
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury & Elegance',
    prompts: [
      {
        id: 'luxury-1',
        name: 'Luxury #1 - Private Jet',
        prompt: `Create a portrait of [the person] in a private jet cabin.
The background should feature exclusive, refined details:
– Cream leather seats with polished wood trim.
– Soft, diffused cabin lighting creating an intimate atmosphere.
– A window showing clouds and blue sky outside.
– Crystal glassware and luxury accessories visible.
Lighting should be sophisticated:
– Soft, warm cabin lighting as the key light.
– Cool window light providing contrast and depth.
– Subtle accent lighting on luxury details.
Style the setting as exclusive, successful, and refined.
Mood: accomplished, sophisticated, exclusive, confident.
Color palette: cream, cognac leather, polished walnut, sky blue.`
      },
      {
        id: 'luxury-2',
        name: 'Luxury #2 - Hotel Suite',
        prompt: `Generate a portrait of [the person] in a luxury hotel suite.
The background should feature elegant, refined interiors:
– Plush velvet furniture in rich jewel tones.
– Floor-to-ceiling windows with city or ocean views.
– Crystal chandelier or elegant pendant lighting.
– Fresh flowers and luxury amenities visible.
Lighting should be warm and flattering:
– Soft, diffused key light from elegant fixtures.
– Natural light from large windows providing fill.
– Accent lighting highlighting architectural details.
Style the setting as glamorous, refined, and aspirational.
Mood: glamorous, refined, successful, elegant.
Color palette: deep emerald, gold, cream, warm amber.`
      },
      {
        id: 'luxury-3',
        name: 'Luxury #3 - Wine Cellar',
        prompt: `Depict [the person] in a private wine cellar.
The background should feature rich, atmospheric details:
– Stone walls lined with wine bottles in wooden racks.
– Warm, dim lighting from wall sconces or candles.
– A rustic wooden tasting table with glasses and decanters.
– Aged barrels and vintage elements visible.
Lighting should be intimate and warm:
– Warm, focused key light from overhead fixtures.
– Soft fill from scattered candles or accent lights.
– Deep shadows adding mystery and depth.
Style the setting as refined, cultured, and timeless.
Mood: sophisticated, cultured, timeless, discerning.
Color palette: deep burgundy, aged wood brown, stone gray, warm candlelight.`
      }
    ]
  }
];

/**
 * Get all prompts flattened into a single array
 */
export const getAllPrompts = () => {
  return PROMPT_CATEGORIES.flatMap(category => 
    category.prompts.map(prompt => ({
      ...prompt,
      categoryId: category.id,
      categoryName: category.name
    }))
  );
};

/**
 * Get prompts by category ID
 */
export const getPromptsByCategory = (categoryId) => {
  const category = PROMPT_CATEGORIES.find(c => c.id === categoryId);
  return category ? category.prompts : [];
};

/**
 * Get a single prompt by ID
 */
export const getPromptById = (promptId) => {
  for (const category of PROMPT_CATEGORIES) {
    const prompt = category.prompts.find(p => p.id === promptId);
    if (prompt) {
      return { ...prompt, categoryId: category.id, categoryName: category.name };
    }
  }
  return null;
};

export default PROMPT_CATEGORIES;






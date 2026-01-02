/**
 * Regenerate specific default scenes
 *
 * Usage: node scripts/regenerateScenes.js <scene-id> [scene-id2] [scene-id3] ...
 *
 * Example: node scripts/regenerateScenes.js default-studio-1 default-office-2
 *
 * To see all available scene IDs, run: node scripts/regenerateScenes.js --list
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const KIE_API_KEY = '86a22053de8cfb051bc3188375857992';
const REFERENCE_URL = 'https://files.catbox.moe/vc80ln.png';
const OUTPUT_DIR = path.join(__dirname, '../../frontend/public/assets/default-scenes');

// All scene prompts (same as generateDefaultScenes.js)
const SCENE_PROMPTS = {
  'default-studio-1': {
    name: 'Modern Interview Studio',
    category: 'studio',
    prompt: `Create a cinematic portrait of [the person in the provided image] seated in a modern, softly lit interview studio.
The background should feature a dark, sophisticated interior with a mix of warm and cool lighting:
– A dimly lit wall with textured concrete or matte panels behind.
– A mid-century modern credenza or wooden sideboard with art sculptures and a warm desk lamp on it.
– A tall vertical neon light glowing in soft red or pink on one side.
– A large window in the background letting in cool daylight filtered through green trees.
Lighting should be cinematic and balanced.
Mood: introspective, intelligent, confident.
Color palette: deep blues, warm ambers, soft daylight tones.`
  },
  'default-studio-2': {
    name: 'Scandinavian Creative',
    category: 'studio',
    prompt: `Create a cinematic portrait of [the person in the image] seated in a Scandinavian-inspired creative studio.
The background should feature a bright, airy, and minimalist interior:
– Clean white walls with a single, large piece of abstract art in muted tones.
– Light oak wood furniture, including a sleek desk and a simple bookshelf with curated design books.
– A large, floor-to-ceiling window letting in abundant, soft, diffused daylight.
Lighting should be soft and naturalistic.
Mood: calm, intelligent, creative, focused.
Color palette: whites, light beige, pale gray, natural wood tones.`
  },
  'default-studio-3': {
    name: 'Industrial Loft',
    category: 'studio',
    prompt: `Generate a portrait of [the person] in a dark, industrial loft studio.
The background should feature a raw, textured environment:
– An exposed brick wall with aged mortar behind.
– Black steel shelving units holding vintage camera gear and books.
– Edison bulbs hanging from visible black cables, casting a warm glow.
– A large industrial window showing a glimpse of a city street outside.
Lighting should be warm and dramatic.
Mood: cinematic, gritty, confident, artistic.
Color palette: deep browns, charcoal, amber, hints of steel blue.`
  },
  'default-studio-4': {
    name: 'Futuristic Broadcast',
    category: 'studio',
    prompt: `Create a portrait of [the person] in a futuristic high-tech broadcast studio.
The background should feature a sleek, glowing environment:
– A wall of LED panels displaying abstract data visualizations in cool tones.
– Geometric wall panels with integrated glowing light strips.
– A polished dark gray floor reflecting light from screens.
Lighting should be futuristic and clean with cyan and violet tones.
Mood: visionary, innovative, sleek, professional.
Color palette: dark gray, cyan, violet, black.`
  },
  'default-studio-5': {
    name: 'Vintage Scholar Study',
    category: 'studio',
    prompt: `Place [the person] in a vintage scholar's study.
The background should feature:
– Floor-to-ceiling dark wood bookshelves filled with leather-bound books.
– A large antique desk with a green banker's lamp providing warm glow.
– Framed antique maps on visible wall space.
– A velvet curtain in emerald or burgundy partially drawn over a window.
Lighting should be warm and intimate.
Mood: introspective, intellectual, timeless, wise.
Color palette: rich browns, deep greens, muted golds, sepia tones.`
  },
  'default-studio-6': {
    name: 'Modern Art Gallery',
    category: 'studio',
    prompt: `Generate a portrait of [the person] sitting in a modern art gallery.
The background should feature:
– Minimalist concrete or stark white walls.
– A single, large colorful abstract painting as the main background element.
– High ceilings with visible gallery track lighting.
– Polished concrete flooring reflecting gallery lights.
Lighting should be clean and directional.
Mood: creative, sophisticated, contemplative, modern.
Color palette: neutral grays and whites with bold color accents.`
  },
  'default-studio-7': {
    name: 'Cozy Podcast Studio',
    category: 'studio',
    prompt: `Create a portrait of [the person] in a cozy home podcast studio.
The background should feature:
– Warm wooden shelves with books, mementos, and small plants.
– A professional microphone on a boom arm nearby.
– Dark gray acoustic foam panels for texture.
– String of warm Edison-style fairy lights creating soft glow.
Lighting should be soft and inviting.
Mood: welcoming, authentic, conversational, passionate.
Color palette: soft oranges, browns, charcoal gray, off-white.`
  },
  'default-studio-8': {
    name: 'Executive Broadcast',
    category: 'studio',
    prompt: `Depict [the person] in a high-end executive broadcast studio.
The background should feature:
– A massive floor-to-ceiling window with panoramic city skyline view.
– A sleek minimalist marble table in front.
– Metallic accents in brushed steel or chrome trim.
Lighting should be clean and professional.
Mood: powerful, calm, refined, authoritative.
Color palette: gray, black, silver, deep navy.`
  },
  'default-office-1': {
    name: 'Penthouse Sunset Office',
    category: 'office',
    prompt: `Create a cinematic portrait of [the person in the image] seated in a luxury penthouse office overlooking a city skyline at sunset.
The background should feature:
– Floor-to-ceiling windows offering a 180-degree view.
– A sleek minimalist desk of dark wood and marble.
– The city lights beginning to glow in golden and amber hues as sky deepens to indigo.
Lighting should be dramatic with warm sunset key light.
Mood: powerful, calm, visionary, successful.
Color palette: deep navy, marble white, gold reflections, dusk blue.`
  },
  'default-office-2': {
    name: 'Glass Boardroom',
    category: 'office',
    prompt: `Generate a portrait of [the person] in a contemporary glass-walled corporate boardroom.
The background should feature:
– Floor-to-ceiling frosted glass walls with silhouettes of colleagues.
– A long polished dark wood boardroom table reflecting overhead lights.
– Sleek ergonomic mesh-backed chairs around the table.
– A large digital screen with neutral corporate graphics.
Lighting should be bright and even.
Mood: professional, confident, strategic, collaborative.
Color palette: cool grays, white, silver-blue, dark wood.`
  },
  'default-office-3': {
    name: 'Executive Library',
    category: 'office',
    prompt: `Depict [the person] in an old-world executive office lined with a private library.
The background should feature:
– Dark mahogany bookshelves with leather-bound legal texts.
– A large antique partner's desk with green banker's lamp.
– A marble fireplace with small crackling fire.
– Deep burgundy leather wingback chairs.
Lighting should be warm and traditional.
Mood: wise, established, trustworthy, powerful.
Color palette: deep burgundy, forest green, mahogany brown, warm gold.`
  },
  'default-office-4': {
    name: 'Startup Loft',
    category: 'office',
    prompt: `Create a portrait of [the person] in an energetic, open-plan startup loft office.
The background should feature:
– Exposed brick walls with motivational posters and whiteboards.
– Colorful modern desks with monitors, coffee cups, sticky notes.
– Exposed ductwork painted in bright accent color.
– Large industrial windows with abundant natural light.
Lighting should be bright and energetic.
Mood: innovative, ambitious, energetic, collaborative.
Color palette: warm brick red, teal accents, natural wood, white.`
  },
  'default-office-5': {
    name: 'Minimalist Japanese',
    category: 'office',
    prompt: `Generate a portrait of [the person] in a serene, minimalist Japanese-inspired office.
The background should feature:
– Soft textured plaster or washi paper walls in natural off-white.
– Simple low-profile furniture in light natural wood with clean lines.
– A beautiful bonsai tree or ikebana arrangement as focal point.
– Shoji screens diffusing soft natural light.
Lighting should be soft and zen-like.
Mood: serene, focused, mindful, elegant.
Color palette: off-white, light wood, soft green, black accents.`
  },
  'default-beach-1': {
    name: 'Sunrise Beach Deck',
    category: 'beach',
    prompt: `Create a cinematic portrait of [the person in the image] on a quiet beachfront deck at sunrise.
The background should feature:
– A weathered wooden deck with comfortable white linen armchair.
– Sheer off-white curtains fluttering in morning breeze.
– Large terracotta pots with lush green palms.
– Soft glistening ocean waves with sun cresting the horizon.
Lighting should be warm and ethereal.
Mood: hopeful, grounded, peaceful, renewed.
Color palette: soft peach, sand beige, sky blue, warm gold.`
  },
  'default-beach-2': {
    name: 'Ocean Cliff Office',
    category: 'beach',
    prompt: `Generate a portrait of [the person] in a modern glass-walled office perched above ocean cliffs.
The background should feature:
– Floor-to-ceiling glass walls with panoramic uninterrupted ocean and sky view.
– A minimalist white desk with sleek laptop.
– Soft sheer white curtains blowing in ocean breeze.
– Distant view of waves crashing against cliffs below.
Lighting should be bright and airy.
Mood: visionary, elevated, expansive, clear-minded.
Color palette: soft blue-gray, ivory, light oak, pale aqua.`
  },
  'default-city-1': {
    name: 'Rooftop Night',
    category: 'city',
    prompt: `Create a cinematic portrait of [the person] on an urban rooftop at night.
The background should feature:
– A panoramic view of glittering city skyline with illuminated buildings.
– Subtle rooftop elements like water tower adding urban texture.
– String lights providing warm accent lighting.
– Night sky with hint of stars above city glow.
Lighting should be dramatic and urban.
Mood: ambitious, confident, metropolitan, visionary.
Color palette: deep navy, warm amber from lights, cool blue city glow.`
  },
  'default-city-2': {
    name: 'Penthouse City View',
    category: 'city',
    prompt: `Generate a portrait of [the person] in a modern penthouse with floor-to-ceiling windows.
The background should feature:
– Expansive glass windows showcasing city skyline at dusk.
– Minimalist luxurious furniture in neutral tones.
– Subtle reflections of city lights in polished floor.
– Sky colors transitioning from warm sunset to cool evening.
Lighting should be sophisticated.
Mood: accomplished, serene, powerful, elegant.
Color palette: dusk orange, steel blue, warm neutrals, gold accents.`
  },
  'default-nature-1': {
    name: 'Forest Clearing',
    category: 'nature',
    prompt: `Create a portrait of [the person] in a sunlit forest clearing.
The background should feature:
– Tall trees with dappled sunlight filtering through canopy.
– Lush green ferns and wildflowers carpeting forest floor.
– Soft diffused golden light creating magical atmosphere.
– Subtle mist or light rays visible in the air.
Lighting should be natural and ethereal.
Mood: serene, connected, wise, grounded.
Color palette: forest green, golden yellow, earth brown, soft white light.`
  },
  'default-luxury-1': {
    name: 'Private Jet Cabin',
    category: 'luxury',
    prompt: `Create a portrait of [the person] in a private jet cabin.
The background should feature:
– Cream leather seats with polished wood trim.
– Soft diffused cabin lighting creating intimate atmosphere.
– A window showing clouds and blue sky outside.
– Crystal glassware and luxury accessories visible.
Lighting should be sophisticated.
Mood: accomplished, sophisticated, exclusive, confident.
Color palette: cream, cognac leather, polished walnut, sky blue.`
  },
  'default-luxury-2': {
    name: 'Luxury Hotel Suite',
    category: 'luxury',
    prompt: `Generate a portrait of [the person] in a luxury hotel suite.
The background should feature:
– Plush velvet furniture in rich jewel tones.
– Floor-to-ceiling windows with city or ocean views.
– Crystal chandelier or elegant pendant lighting.
– Fresh flowers and luxury amenities visible.
Lighting should be warm and flattering.
Mood: glamorous, refined, successful, elegant.
Color palette: deep emerald, gold, cream, warm amber.`
  }
};

// Helper functions (same as before)
async function createKieTask(referenceImageUrl, prompt) {
  const response = await axios.post('https://api.kie.ai/api/v1/jobs/createTask', {
    model: 'google/nano-banana-edit',
    input: {
      prompt,
      image_urls: [referenceImageUrl],
      image_size: '9:16'
    }
  }, {
    headers: {
      'Authorization': `Bearer ${KIE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    timeout: 30000
  });
  return response.data;
}

async function checkTaskStatus(taskId) {
  const response = await axios.get('https://api.kie.ai/api/v1/jobs/recordInfo', {
    params: { taskId },
    headers: { 'Authorization': `Bearer ${KIE_API_KEY}` },
    timeout: 30000
  });
  return response.data;
}

async function waitForTask(taskId) {
  const maxWaitMs = 180000;
  const startTime = Date.now();

  while (Date.now() - startTime < maxWaitMs) {
    const status = await checkTaskStatus(taskId);
    if (status.code === 200 && status.data) {
      if (status.data.state === 'success') {
        let resultUrls = [];
        if (status.data.resultJson) {
          const result = JSON.parse(status.data.resultJson);
          resultUrls = result.resultUrls || [];
        }
        return resultUrls[0];
      }
      if (status.data.state === 'failed') {
        throw new Error(status.data.failMsg || 'Task failed');
      }
    }
    process.stdout.write('.');
    await new Promise(r => setTimeout(r, 3000));
  }
  throw new Error('Timeout');
}

async function downloadImage(url, outputPath) {
  const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 60000 });
  fs.writeFileSync(outputPath, response.data);
}

async function regenerateScene(sceneId) {
  const scene = SCENE_PROMPTS[sceneId];
  if (!scene) {
    console.log(`Unknown scene ID: ${sceneId}`);
    return false;
  }

  console.log(`\nRegenerating: ${scene.name} (${sceneId})`);

  try {
    const taskResponse = await createKieTask(REFERENCE_URL, scene.prompt);
    if (taskResponse.code !== 200 && taskResponse.code !== 0) {
      throw new Error(taskResponse.msg);
    }

    const taskId = taskResponse.data?.taskId;
    console.log(`  Task: ${taskId}`);
    process.stdout.write('  Waiting');

    const imageUrl = await waitForTask(taskId);
    console.log('\n  Done!');

    const outputPath = path.join(OUTPUT_DIR, `${sceneId}.png`);
    await downloadImage(imageUrl, outputPath);
    console.log(`  Saved: ${outputPath}`);

    return true;
  } catch (error) {
    console.log(`\n  Error: ${error.message}`);
    return false;
  }
}

// Main
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
Regenerate Default Scenes
=========================

Usage: node scripts/regenerateScenes.js <scene-id> [scene-id2] ...

Options:
  --list    Show all available scene IDs
  --help    Show this help

Example:
  node scripts/regenerateScenes.js default-studio-1 default-office-2
`);
    return;
  }

  if (args[0] === '--list') {
    console.log('\nAvailable Scene IDs:\n');
    Object.entries(SCENE_PROMPTS).forEach(([id, scene]) => {
      console.log(`  ${id.padEnd(22)} - ${scene.name}`);
    });
    console.log('');
    return;
  }

  console.log('Regenerating scenes...\n');

  let success = 0;
  let failed = 0;

  for (const sceneId of args) {
    const result = await regenerateScene(sceneId);
    if (result) success++;
    else failed++;
  }

  console.log(`\nDone! Success: ${success}, Failed: ${failed}`);
}

main().catch(console.error);

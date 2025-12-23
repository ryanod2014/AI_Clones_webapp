import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getScenes, deleteScene } from '../utils/db';
import useAppStore from '../stores/useAppStore';

function SceneGallery({ onSelect }) {
  const [scenes, setScenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const { selectedScene } = useAppStore();

  useEffect(() => {
    loadScenes();
  }, []);

  const loadScenes = async () => {
    setIsLoading(true);
    try {
      const loadedScenes = await getScenes();
      setScenes(loadedScenes);
    } catch (error) {
      console.error('Failed to load scenes:', error);
      toast.error('Failed to load scenes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (e, sceneId) => {
    e.stopPropagation();
    setDeletingId(sceneId);
    try {
      await deleteScene(sceneId);
      setScenes(scenes.filter(s => s.id !== sceneId));
      toast.success('Scene deleted');
    } catch (error) {
      toast.error('Failed to delete scene');
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const truncatePrompt = (prompt, maxLength = 60) => {
    if (prompt.length <= maxLength) return prompt;
    return prompt.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="spinner"></div>
      </div>
    );
  }

  if (scenes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-medium flex items-center justify-center">
          <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-text-primary mb-2">No Saved Scenes</h3>
        <p className="text-text-secondary text-sm">
          Generate your first scene to see it here
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {scenes.map((scene, index) => (
        <div
          key={scene.id}
          onClick={() => onSelect(scene)}
          className={`
            glass-card-hover overflow-hidden cursor-pointer animate-fade-in
            ${selectedScene?.id === scene.id ? 'ring-2 ring-electric' : ''}
          `}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {/* Image */}
          <div className="aspect-video relative bg-slate-dark">
            <img
              src={scene.imageUrl}
              alt={scene.prompt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
            
            {/* Orientation Badge */}
            <div className="absolute top-2 right-2 px-2 py-1 bg-void/80 backdrop-blur-sm rounded text-xs text-text-secondary">
              {scene.orientation === 'vertical' ? '9:16' : '16:9'}
            </div>
            
            {/* Selected Indicator */}
            {selectedScene?.id === scene.id && (
              <div className="absolute inset-0 bg-electric/10 flex items-center justify-center">
                <div className="bg-electric text-void rounded-full p-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-text-primary mb-2 line-clamp-2">
              {truncatePrompt(scene.prompt)}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">
                {formatDate(scene.timestamp)}
              </span>
              <button
                onClick={(e) => handleDelete(e, scene.id)}
                disabled={deletingId === scene.id}
                className="p-1.5 rounded hover:bg-coral/20 text-text-muted hover:text-coral transition-colors"
                title="Delete scene"
              >
                {deletingId === scene.id ? (
                  <div className="w-4 h-4 border-2 border-coral/30 border-t-coral rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SceneGallery;






import { useState } from 'react';
import RichEditor from '../components/RichEditor';
import TagSelector from '../components/TagSelector';

export default function Ask() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = async () => {
    const res = await fetch('/api/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body: content, tags }),
    });
    const data = await res.json();
    alert('Question posted!');
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <input type="text" placeholder="Title" className="input" value={title} onChange={e => setTitle(e.target.value)} />
      <RichEditor value={content} onChange={setContent} />
      <TagSelector value={tags} onChange={setTags} />
      <button onClick={handleSubmit} className="btn btn-primary">Post</button>
    </div>
  );
}
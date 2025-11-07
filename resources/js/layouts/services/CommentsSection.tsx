// src/components/CommentsSection.tsx
import React from 'react';
import { useForm } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { Comment } from '@/types';
import { route } from 'ziggy-js';

interface CommentsSectionProps {
  title: string;
  comments: Comment[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ title, comments }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('comments.store'), {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="comments-area mb-16">
      <div className="group-title mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="dotted-box flex items-center gap-2">
          <span className="dotted w-8 h-0.5 bg-gray-300"></span>
          <span className="dotted w-8 h-0.5 bg-gray-300"></span>
          <span className="dotted w-8 h-0.5 bg-gray-300"></span>
        </div>
      </div>
      <div className="comment-box space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="comment flex gap-6">
            <figure className="thumb-box w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
            </figure>
            <div className="comment-inner flex-1 border border-gray-200 p-6 rounded-lg">
              <div className="comment-info mb-3">
                <h5 className="text-lg font-bold text-gray-800">{comment.author}</h5>
                <span className="comment-time text-sm text-gray-500 italic">{comment.date}</span>
              </div>
              <p className="mb-4 text-gray-700">{comment.content}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-[#0099cc] hover:text-[#007aa3] transition-colors">
                reply
                <Send className="w-3 h-3 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Formulaire de commentaire */}
      <div className="comments-form-area">
        <div className="group-title mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Leave a Reply</h2>
          <p className="text-gray-600 mb-4">Note: We'll not publish your email anyway, you're safe!</p>
          <div className="dotted-box flex items-center gap-2">
            <span className="dotted w-8 h-0.5 bg-gray-300"></span>
            <span className="dotted w-8 h-0.5 bg-gray-300"></span>
            <span className="dotted w-8 h-0.5 bg-gray-300"></span>
          </div>
        </div>
        <form onSubmit={submitComment} className="comment-form space-y-4">
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Comment" 
              value={data.message}
              onChange={e => setData('message', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent resize-none h-40"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
              required 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email address" 
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
              required 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="website" 
              placeholder="Website" 
              value={data.website}
              onChange={e => setData('website', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
            />
          </div>
          <div className="form-group message-btn">
            <button 
              type="submit" 
              disabled={processing}
              className="theme-btn-two bg-[#0099cc] text-white px-6 py-3 rounded-lg hover:bg-[#007aa3] transition-colors inline-flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentsSection;
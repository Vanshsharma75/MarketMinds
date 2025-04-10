import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './blogView.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const { slug } = useParams();
  const navigate = useNavigate();

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:8003/api/blogs');
        setBlogs(res.data);
        if (slug) {
          const matchingBlog = res.data.find(blog => blog.slug === slug);
          if (matchingBlog) {
            setSelectedBlog(matchingBlog);
          }
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };
    fetchBlogs();
  }, [slug]);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    navigate(`/blog/${blog.slug}`);
  };

  const handleBack = () => {
    setSelectedBlog(null);
    navigate('/blog');
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="blog-container">
      {selectedBlog ? (
        <div className="blog-detail-view">
          <button className="back-btn" onClick={handleBack}>← Back to Blogs</button>
          <div className="blog-hero-image">
            <img src={selectedBlog.image} alt={selectedBlog.title} />
          </div>
          <div className="full-blog-content">
            <h1>{selectedBlog.title}</h1>
            <p>{selectedBlog.content}</p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="blog-main-title">Our Blogs</h1>
          <div className="blog-grid">
            {currentBlogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <div className="blog-card-image">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className="blog-card-content">
                  <h2>{blog.title}</h2>
                  <p>{blog.preview}</p>
                  <button className="read-more-btn" onClick={() => handleReadMore(blog)}>
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              Previous
            </button>
            <span className="page-number">Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;

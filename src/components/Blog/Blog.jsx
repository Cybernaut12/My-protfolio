import "./Blog.css"

const Blog = () => {
  const blogPosts = [
    {
      image: "https://tse2.mm.bing.net/th/id/OIP.enj9g8VibciFcTw7WgQ9FAHaFB?rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "October 18, 2024",
      author: "cyber",
      comments: 7345,
      title: "The standard personal My portfolio",
      link: "#",
    },
    {
      image: "https://quotefancy.com/media/wallpaper/1600x900/2598180-Bjarne-Stroustrup-Quote-The-most-important-single-aspect-of.jpg",
      date: "October 18, 2025",
      author: "cyber",
      comments: 2580,
      title: "The standard personal My portfolio",
      link: "#",
    },
    {
      image: "https://tse4.mm.bing.net/th/id/OIP.BzhJjAajtFstfnvx2IuTTwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "October 18, 2025",
      author: "cyber",
      comments: 0,
      title: "Empowering your business with innovative solutions",
      link: "#",
    },
  ]

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-9 mb-4">
            <div className="section-heading">
              <h5 className="section-subtitle">MY BLOG</h5>
              <h2 className="section-title">Unlocking the potential of your personal brand</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="blog-item">
                <a href={post.link} className="blog-img">
                  <img src={post.image || "/placeholder.svg"} alt="blog" className="blog-image" />
                </a>
                <div className="blog-text">
                  <span>{post.date}</span>
                  <ul className="blog-meta">
                    <li>
                      <i className="fa-solid fa-circle-user"></i> By {post.author}
                    </li>
                    <li>
                      <i className="fa-solid fa-comments"></i> Comments ({post.comments})
                    </li>
                  </ul>
                  <a href={post.link}>{post.title}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a href="https://www.instagram.com/victor.ajisola?igsh=dWlnMnYwd3ViYWI" target="_blank" rel="noopener noreferrer" className="common-btn">
              More Blog
              <i className="fal fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

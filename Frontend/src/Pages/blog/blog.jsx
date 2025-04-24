import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './blogView.css';
import genretqualityleads from '../../../public/assets/Genrate-highQuality-leads.jpg';
import SmallBusiness from '../../../public/assets/Small-business.jpg';
import LocalBusiness from '../../../public/assets/Local-business.jpg';
import DigitalGrowth from '../../../public/assets/Digital-Growth.jpg';
import manage from '../../../public/assets/Manage.jpg';

const blogsData = [
  {
    _id: '5',
    title: 'Digital Growth on a Budget: ₹10,000/Month Strategy for Schools & Startups',
    slug: 'digital-growth-budget-strategy',
    content: `<h1>Digital Growth on a Budget: ₹10,000/Month Strategy for Schools & Startups</h1>

<p>In a world that's gone digital and at a rather fast pace, online expansion is what you will require to be successful and survive. This is particularly the case if you are school or start-up that seeks to thrive online. But how do you get measurable results without being ripped off?</p>

<p>At Marketminds Digital Solution, we understand intelligent marketing. That's why we've developed a tested strategy for digital growth on a shoestring budget: ₹10,000 a month, designed especially for schools and emerging businesses.</p>

<h2>Why Digital Growth Is Important</h2>

<p>Whether you are an educational institution wanting to expand admissions or a new company seeking your initial group of loyal customers, digital growth delivers targeted visibility, audience interactions, and replicable long-term outcomes. It bridges the divide between old-school marketing and the new customer journey. Digital growth on a shoestring budget: ₹10,000 is not a dream—it's a practical strategy when done right.</p>

<h2>Marketminds' Tested ₹10,000/Month Digital Growth Strategy</h2>

<p>We've tried this strategy with actual clients in Delhi NCR and elsewhere. Here's how we dissect it:</p>

<h3>1. Search Engine Optimization</h3>

<p>SEO is the pillar of digital growth. Optimize your site with top-ranking keywords such as "digital growth on a budget: ₹10,000" to enhance organic reach. Our team develops EEAT-aligned blog content that ranks and converts.</p>

<ul>
  <li>8 SEO blogs/month, keyword targeting, on-page optimization</li>
  <li>Tools: Google Search Console, Yoast SEO, Ubersuggest</li>
</ul>

<h3>2. Local SEO & Google My Business</h3>

<p>Vital for schools and startups alike. Google My Business Profile increases local exposure and cultivates confidence.</p>

<ul>
  <li>Weekly updates</li>
  <li>Reviews management</li>
  <li>Q&A and service highlights section</li>
</ul>

<h3>3. Social Media Ads</h3>

<p>Custom-tailored Facebook and Instagram ads are affordable and create leads quicker.</p>

<ul>
  <li>Split testing creatives</li>
  <li>Location-based targeting (perfect for students)</li>
  <li>Startups segmentation</li>
</ul>

<p>We have enabled numerous clients to create over 100 leads a month under ₹10,000.</p>

<h3>4. Email Marketing</h3>

<p>Custom-fitted regular newsletters that feed your audience regularly. Give value-driven news, important events, admissions updates, product launch, etc.</p>

<ul>
  <li>Tools: Mailchimp, Moosend</li>
  <li>Frequency: 2 emails per month</li>
</ul>

<h3>5. Design & Branding Tools</h3>

<p>Visuals catch the eye. Take advantage of Canva Pro, AI video tools to establish spectacular creatives for social, blog.</p>

<p><strong>Marketminds Pro Tip:</strong> Reels and short-form videos are a key part of digital growth and retention.</p>

<h3>6. Analytics & Reporting Tools</h3>

<p>Measure what matters. Use:</p>

<ul>
  <li>Google Analytics</li>
  <li>Meta Ads Manager</li>
  <li>HubSpot Free CRM (start-up)</li>
</ul>

<p>Monitor key markers such as CPC, bounce rate and conversion rate to adjust month by month.</p>

<h2>Final Words: Start Growing Digitally</h2>

<p>Digital budget increase ₹10,000 is not good, just must be an obligatory measure for startups and educational institutions in 2025. The competition in the market is growing, and the digital world is not waiting for anyone.</p>

<p>Marketminds Digital Solution. With us, businesses make their big digital moves. We will develop the right strategy and use our experience, and with just ₹10,000 you will drive leads and traffic in no time.</p>`,
    preview: 'Discover how schools and startups can achieve digital growth on a budget: ₹10,000. Marketminds Digital Solution reveals the exact monthly plan for measurable success.',
    image: DigitalGrowth,
    author: 'Vansh Sharma',
    tags: ['Digital Marketing', 'Budget Strategy', 'Schools', 'Startups', 'Growth'],
    createdAt: '2024-04-18'
  },
  {
    _id: '4',
    title: 'How Digital Marketing Can Skyrocket Your Lead Generation and Sales',
    slug: 'digital-marketing-lead-generation-sales',
    content: `<h1>How Digital Marketing Can Skyrocket Your Lead Generation and Sales</h1>

<p>In today's digital world, companies that master online marketing strategies are the ones leading their industries. With the right approach, you can turn cold traffic into warm leads—and warm leads into loyal, paying customers.</p>

<p>If you're looking to generate high-quality leads without wasting time or money, this guide covers everything you need to know about lead generation and how to use digital marketing to grow your business fast.</p>

<h2>What Is Lead Generation and Why Is It Important?</h2>

<p>Lead generation is the process of attracting potential customers and converting them into interested prospects. Without it, your business risks stagnation.</p>

<p>In the digital-first era, traditional methods like cold calling, door-to-door flyers, and billboards no longer deliver the same results. That's where digital marketing steps in and shifts the game in your favor.</p>

<h2>1. Content & SEO Strategy for Organic Lead Generation</h2>

<p>Ranking on Google's first page isn't optional—it's essential. At Marketminds Digital Solutions, we target high-value keywords like "lead generation" and "how digital marketing works" to drive qualified organic traffic.</p>

<p>Our approach includes:</p>

<ul>
  <li>Keyword-optimized blog articles and landing pages</li>
  <li>Meta descriptions and headers tailored for search engines</li>
  <li>Internal linking to strengthen site structure</li>
</ul>

<p>This not only builds credibility with users but also aligns with Google's EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness) standards.</p>

<h2>2. Targeted Paid Ads for Immediate Results</h2>

<p>Looking for faster lead generation? Paid advertising is your secret weapon.</p>

<p>We deliver with:</p>

<ul>
  <li>Precision-targeted Google and Facebook ads</li>
  <li>Conversion-optimized creatives and headlines</li>
  <li>Lead magnets (free trials, ebooks, webinars) to capture details</li>
</ul>

<p>Every campaign is backed by data and designed for ROI—never vanity metrics.</p>

<h2>3. Nurture and Convert with Email Marketing</h2>

<p>Email marketing is about building lasting relationships—not just one-time clicks.</p>

<p>Our strategies include:</p>

<ul>
  <li>Automated email sequences triggered by user behavior</li>
  <li>Segmentation to deliver personalized content</li>
  <li>Lead scoring to focus on top converters</li>
</ul>

<p>Every campaign is crafted with EEAT pillars in mind: trust, value, and experience.</p>

<h2>4. Social Media for Brand Visibility & Lead Generation</h2>

<p>People buy from brands they know and trust. That's why we leverage platforms like Facebook, Instagram, and LinkedIn to build brand recognition and generate leads.</p>

<p>Our process includes:</p>

<ul>
  <li>Engaging content with strong CTAs</li>
  <li>Social proof through testimonials and case studies</li>
  <li>Retargeting ads to re-engage cold traffic</li>
</ul>

<p>Digital marketing offers scalable, repeatable lead-gen systems—and we know how to harness them.</p>

<h2>Real Results from Marketminds Digital Solutions</h2>

<p>A B2B SaaS company partnered with us due to low web traffic and poor lead conversion. In just 90 days, our tailored multi-channel strategy delivered:</p>

<ul>
  <li>180% increase in lead generation</li>
  <li>70% decrease in cost per acquisition</li>
  <li>2x growth in organic traffic via SEO</li>
</ul>

<p>Digital marketing done right transforms your pipeline—and your revenue.</p>

<h2>Why Choose Marketminds Digital Solutions?</h2>

<p>If you're serious about leveling up your lead generation, you need a digital partner who understands the entire landscape and knows how to deliver real results.</p>

<p>With Marketminds, you get:</p>

<ul>
  <li>Expert marketers at your service</li>
  <li>Campaigns designed with your business goals in mind</li>
  <li>Full transparency with real-time campaign reporting</li>
  <li>Custom solutions tailored to your audience and niche</li>
</ul>

<h2>Final Thoughts: It's Time to Grow with Marketminds Digital Solutions</h2>

<p>Don't let a weak lead pipeline stall your business growth. With the right digital marketing strategies—and the right team—your business can thrive.</p>

<p>If you're ready to experience measurable success, let Marketminds Digital Solutions create a strategy that brings in consistent leads and sustainable growth.</p>

<h3>Ready to Take the Next Step?</h3>

<p>Book a discovery call for a complimentary consultation. Let's explore how Marketminds Digital Solutions can elevate your lead generation strategy and maximize your ROI.</p>`,
    preview: 'Discover how digital marketing boosts lead generation and sales using data-driven strategies. Learn expert tips to grow your business and dominate your niche online.',
    image: manage, // Using the same image as it's related to lead generation
    author: 'Vansh Sharma',
    tags: ['Digital Marketing', 'Lead Generation', 'Sales Growth', 'Marketing Strategy'],
    createdAt: '2024-04-17'
  },
  {
    _id: '3',
    title: 'How to Generate High-Quality Leads Without Spending a Fortune',
    slug: 'generate-high-quality-leads-budget',
    content: `<h1>How to Generate High-Quality Leads Without Spending a Fortune</h1>

<p>Generating good leads is absolutely crucial for any business. But what if you have a limited budget? Today, in the digital age, being able to generate valuable leads without a lot of money is not just smart business—it is a competitive differentiator. This blog by Marketminds Digital Solution enlightens you about established methodologies comprising of practical examples and expert advice that enable you to collect top-notch leads without burning a hole in the pocket.</p>

<h2>1. Take Advantage of Organic Content to Get Ideal Customers</h2>

<p>Producing worthwhile, SEO-optimized content is one of the best methods for obtaining high-quality leads on a no-money-down basis. Write blog articles, how-to tutorials, and case studies that directly address your target audience's pain points. When your content provides direct answers to certain questions like "How to get high-quality leads?", it tends to draw interested readers who are more likely to convert.</p>

<h3>Create content that:</h3>
<ul>
  <li>Solves real problems for your readers.</li>
  <li>Has keywords like "how to generate good quality leads" naturally.</li>
  <li>Is Google Search optimized (use headers, meta tags, and alt text).</li>
</ul>

<p>Marketminds Digital Solution recommends consistency in publishing and focusing on helpfulness rather than just promotion to make your organic strategy more effective.</p>

<h2>2. Leverage Social Media Effectively to Create Visibility and Trust</h2>

<p>Social media is a goldmine for lead generation for free—if utilized in the right manner. Target areas where your potential customers hang out. Share tips about your area of expertise through bite-sized pieces of advice, videos, and backstories. Join conversations within applicable groups or hashtags. Don't just sell—solve. People trust brands that provide value. That trust is the foundation for building a pipeline of high-quality leads over time, and best of all, it doesn't cost a dime.</p>

<h3>Strategies that work:</h3>
<ul>
  <li>Post useful, targeted content regularly.</li>
  <li>Respond to your followers with comments and DMs.</li>
  <li>Connect to Facebook and LinkedIn groups where your target customers congregate.</li>
  <li>Utilize Instagram Stories and LinkedIn polls to facilitate interactive engagement.</li>
</ul>

<p>With tailored social strategies from Marketminds Digital Solution, many small businesses have turned followers into long-term clients—without spending big.</p>

<h2>3. Develop Irresistible Lead Magnets That Convert</h2>

<p>If you're willing to learn how to build top-notch leads, you need an offer they can't say no to. It could be an ebook, a free checklist, or access to a tool—something that solves the issue in a matter of seconds. You trade this item for their email address, and you're done—you have a lead.</p>

<p>Keep your lead magnets simple and focused. The more relevant they are to your ideal audience, the better your conversion rate, and the less you'll need to spend.</p>

<p>Marketminds Digital Solution often encourages businesses to start with one highly-relevant lead magnet that addresses a burning issue—this approach builds both credibility and a strong subscriber base quickly.</p>

<h2>4. Leverage Free Tools and Local Listings</h2>

<p>There are quite a number of free tools and platforms that are available to drive high-quality leads without an outlay of costs. Google Business Profile, Bing Places, and online directories like Yelp or Justdial (particularly for businesses that are based locally) work great for exposure.</p>

<p>Additional platforms including Canva, HubSpot Free CRM, and Mailchimp provide quality, free functionalities as well. These could be used to manage existing contacts. They offer a variety of applications including creation of professional graphics, and lead nurturing emails, all free of charge.</p>

<p>Pro Tip from Marketminds Digital Solution: Keep your listings consistent and updated across platforms. It boosts credibility and improves search ranking.</p>

<h2>5. Leverage Referrals from Satisfied Customers</h2>

<p>Word-of-mouth is still among the most effective and inexpensive ways to create high-quality leads. Get your satisfied customers to refer others by offering incentives or simply asking. A lead coming through a trusted source is not only less expensive but frequently of a much higher quality.</p>

<p>One of the easiest and best methods of encouraging more referrals is by asking at the optimal time—immediately following a successful service delivery or after a good feedback session.</p>

<h3>Methods to obtain additional referrals:</h3>
<ul>
  <li>Request referrals from satisfied customers</li>
  <li>Develop a basic referral program with minor rewards</li>
  <li>Post customer testimonials and success stories on social media</li>
  <li>Thank them via email with a referral link</li>
</ul>

<p>Word of mouth matters. People believe recommendations. A referred lead is generally higher quality and more likely to convert.</p>

<h2>Final Thoughts</h2>

<p>Learning how to generate high-quality leads without spending a fortune isn't about cutting corners—it's about being resourceful, strategic, and intentional. By leveraging organic content, social media, lead magnets, free tools, and customer referrals, you can build a steady stream of qualified leads without blowing your budget.</p>

<p>Marketminds Digital Solution believes that when you focus on value, consistency, and trust—you'll find that the best leads often come without the biggest price tags.</p>`,
    preview: 'Smart, budget-friendly strategies to generate real leads who actually care about your product or service.',
    image: genretqualityleads,
    author: 'Vansh Sharma',
    tags: ['Lead Generation', 'Marketing', 'Growth'],
    createdAt: '2024-04-14'
  },
  {
    _id: '1',
    title: 'How to Grow a Small Business: A Complete Guide to Organic Growth',
    slug: 'small-business-organic-growth-guide',
    content: `<h1>How to Grow a Small Business: A Complete Guide to Organic Growth</h1>

<p>Growing a small business is both exciting and challenging. Many entrepreneurs seek ways to expand their businesses without spending excessive money on advertisements. Organic growth focuses on sustainable strategies such as client connections, brand identity, and strategic marketing. In this blog, we will explore the best ways to grow a small business while ensuring long-term success.</p>

<h2>Understanding Organic Business Growth</h2>

<p>Organic business growth refers to increasing profit and client base naturally, without relying heavily on paid advertising. It involves improving client experience, optimizing marketing strategies, and enhancing business operations. To organically grow a small business, you need to focus on client trust and brand awareness.</p>

<h2>1. Develop a Strong Business Plan</h2>

<p>A well-structured business plan is the foundation of successful growth. It should include:</p>
<ul>
  <li>Your business goals and objectives</li>
  <li>Target audience analysis</li>
  <li>Competitive research</li>
  <li>Financial planning</li>
  <li>Marketing and operational strategies</li>
</ul>
<p>Having a detailed plan will guide your decisions and ensure steady growth.</p>

<h2>2. Build a Strong Online Presence</h2>

<p>In the digital age, an online presence is crucial. To grow a small business, ensure you have:</p>
<ul>
  <li>A professional website optimized for SEO</li>
  <li>Active social media profiles</li>
  <li>A Google My Business listing</li>
  <li>Customer-friendly online content</li>
</ul>
<p>A well-maintained online presence helps attract new customers and build credibility.</p>

<h2>3. Leverage Search Engine Optimization (SEO)</h2>

<p>SEO is crucial to driving organic business. Some effective SEO strategies include:</p>
<ul>
  <li>Using relevant keywords such as "grow a small business" and "organically grow a small business"</li>
  <li>Optimizing website content and blog posts</li>
  <li>Creating high-quality backlinks</li>
  <li>Improving website speed and mobile-friendliness</li>
</ul>
<p>SEO ensures that potential customers find your business when searching for relevant services.</p>

<h2>4. Focus on Content Marketing</h2>

<p>Content marketing is an excellent way to organically grow a small business. Effective content marketing strategies include:</p>
<ul>
  <li>Writing educational blog posts</li>
  <li>Creating engaging social media content</li>
  <li>Producing video tutorials or guides</li>
  <li>Hosting webinars and podcasts</li>
</ul>
<p>High-quality content positions your business as an authority in your industry and attracts organic visitors.</p>

<h2>5. Develop Strong Customer Relationships</h2>

<p>Happy customers are your best brand ambassadors. Build strong connections by:</p>
<ul>
  <li>Providing excellent customer service</li>
  <li>Personalizing customer interactions</li>
  <li>Encouraging feedback and reviews</li>
  <li>Implementing loyalty programs</li>
</ul>
<p>Customers who feel valued are more likely to recommend your business to others.</p>

<h2>6. Email Marketing</h2>

<p>Email marketing is a vital tool to grow a small business. To use it effectively:</p>
<ul>
  <li>Build a strong email list</li>
  <li>Send personalized offers and updates</li>
  <li>Share educational newsletters</li>
  <li>Automate follow-up emails for customer engagement</li>
</ul>
<p>Regular communication keeps your customers engaged and encourages repeat business.</p>

<h2>7. Network and Collaborate</h2>

<p>Business networking helps expand your client base. To organically grow a small business, consider:</p>
<ul>
  <li>Attending industry events and conferences</li>
  <li>Joining business groups and online forums</li>
  <li>Partnering with other businesses for collaborations</li>
</ul>
<p>Networking opens new growth opportunities and strengthens brand credibility.</p>

<h2>8. Focus on Customer Retention</h2>

<p>Acquiring new customers is essential, but retaining existing ones is equally important. Retain customers by:</p>
<ul>
  <li>Offering exclusive deals and discounts</li>
  <li>Providing exceptional after-sales service</li>
  <li>Engaging with customers through social media</li>
</ul>
<p>Loyal customers lead to steady business growth and long-term success.</p>

<h2>9. Optimize Business Operations</h2>

<p>Effective business operations improve productivity. Optimize processes by:</p>
<ul>
  <li>Automating repetitive tasks</li>
  <li>Investing in business management software</li>
  <li>Training employees for skill improvement</li>
  <li>Improving supply chain management</li>
</ul>
<p>Effective operations result in cost savings and better service delivery.</p>

<h2>10. Monitor and Analyze Business Growth</h2>

<p>Regular analysis helps identify growth patterns. Track business performance by:</p>
<ul>
  <li>Monitoring website traffic and SEO rankings</li>
  <li>Analyzing sales and revenue trends</li>
  <li>Gathering customer feedback</li>
  <li>Adjusting marketing strategies based on insights</li>
</ul>
<p>Data-driven decisions ensure sustainable business growth.</p>

<h2>Conclusion</h2>

<p>Building a small business takes persistence, resilience, and smart strategies. By focusing on organic methods like SEO, content marketing, nurturing customer relationships, and streamlining operations, you can set yourself up for long-term success. Start putting these strategies into action today to create a solid, trustworthy brand and watch your small business grow naturally.</p>

<p>Your business will steadily expand, attract loyal customers, and thrive in the long run without heavily relying on expensive advertising when you implement these guidelines. Incorporate these tactics into your daily operations now, and watch how your small business grows!</p>`,
    preview: 'Discover effective strategies for growing your small business organically without breaking the bank on advertising.',
    image: SmallBusiness,
    author: 'Vansh Sharma',
    tags: ['Small Business', 'Growth Strategy', 'Marketing', 'Business Development'],
    createdAt: '2024-04-15'
  },
  {
    _id: '2',
    title: 'Why Every Local Business in Ghaziabad Needs a Website in 2025',
    slug: 'ghaziabad-local-business-website-2025',
    content: `<h1>Why Every Local Business in Ghaziabad Needs a Website in 2025</h1>

<h2>Introduction</h2>

<p>In the fast-paced digital age of 2025, establishing a solid online presence is no longer an extravagance—it's an imperative. For every Ghaziabad local business, a website serves as a digital window shop, allowing to attract new patrons, grow exposure, and boost long-term expansion. At MarketMinds Digital Solutions, we specialize in assisting local businesses to establish a potent digital image that distinguishes them from competitors.</p>

<h2>The Benefits of an Online Presence</h2>

<p>Online presence is a critical success factor for every local business in Ghaziabad.</p>

<ul>
  <li><strong>24/7 Visibility:</strong> Your site works around the clock, even when your physical store is closed. It ensures that your products and services are always available to potential customers.</li>
  <li><strong>Customer Trust:</strong> In the marketplace of today's consumers expect businesses to have a website. A great design and well put together site can boost your credibility in the consumers eyes.</li>
  <li><strong>Wider Reach:</strong> Online platforms are not just effective but also efficient. They have a wider reach compared to traditional marketing methods.</li>
</ul>

<p>An online professional presence also allows companies to integrate with social media, collect reviews, and offer promotions to influence interest and sales.</p>

<h2>Why Local SEO is Important in 2025</h2>

<p>Local SEO is the lifeblood of any digital marketing strategy for a local business in Ghaziabad. Here's why it's important:</p>

<ul>
  <li><strong>Better Google Rankings:</strong> Local SEO makes your business visible in local related searches—highly relevant when users search for services "near me".</li>
  <li><strong>Targeted Traffic:</strong> It drives individuals who are actively searching for the product or services you provide in Ghaziabad.</li>
  <li><strong>Google My Business Integration:</strong> Making your site more optimized with local keywords means you'll show up in Google Maps and local listings.</li>
</ul>

<p>By optimizing for local SEO, your company gets seen by customers in your region who are prepared to buy.</p>

<h2>Affordable Website Packages Specifically for Local Businesses</h2>

<p>The other myth is that having a website costs too much. At MarketMinds Digital Solution, we have affordable packages that are specifically tailored to the requirements of a local business in Ghaziabad. Our plans are transparent, scalable, and offer great value:</p>

<ul>
  <li>Starter Packages for startup businesses</li>
  <li>E-Commerce Integrations for service providers and retailers</li>
  <li>SEO and Maintenance Plans for continuous success</li>
</ul>

<p>Whether you're just starting out or looking to upgrade, our team ensures your digital investment delivers real results.</p>

<h2>Real Experience, Real Results</h2>

<p>We have assisted dozens of local businesses in Ghaziabad to expand their online presence and gain measurable success. From restaurants and gyms to clinics and retail shops, our clients are consistently experiencing more web traffic, lead generation, and customer engagement.</p>

<h2>Conclusion</h2>

<p>In 2025, if your business isn't online, you're already behind. A professional website is your gateway to visibility, credibility, and sustained growth. For every local business in Ghaziabad, it's not just about staying competitive—it's about staying relevant.</p>

<p>At MarketMinds Digital Solution, we blend expert advice, local market savvy, and cost-effective solutions to enable you to succeed in the digital age.</p>

<h3>Ready to take your local business in Ghaziabad online?</h3>
<p>Contact MarketMinds Digital Solution today and let's build your future—together.</p>

<h3>For more Information:</h3>
<ul>
  <li>🌐 www.marketmindsdigitalsolutions.com</li>
  <li>📧 marketmindsdigitalsolutions@gmail.com</li>
  <li>☎️ +91-9997957533</li>
</ul>`,
    preview: 'Discover why having a website is crucial for local businesses in Ghaziabad in 2025 and how it can transform your business growth.',
    image: LocalBusiness,
    author: 'Vansh Sharma',
    tags: ['Local Business', 'Website Development', 'Digital Marketing', 'Ghaziabad', 'SEO'],
    createdAt: '2024-04-16'
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find blog by slug if URL has slug parameter
  React.useEffect(() => {
    if (slug) {
      const matchingBlog = blogsData.find(blog => blog.slug === slug);
      if (matchingBlog) {
        setSelectedBlog(matchingBlog);
      }
    }
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
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  return (
    <div className="blog-container">
      {selectedBlog ? (
        <div className="blog-detail-view">
          <button className="back-btn" onClick={handleBack}>← Back to Blogs</button>
          <div className="blog-hero-image">
            <img 
              src={selectedBlog.image} 
              alt={selectedBlog.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/800x400/png?text=Blog+Image';
              }}
            />
          </div>
          <div className="full-blog-content">
            <h1>{selectedBlog.title}</h1>
            <div className="blog-metadata">
              <span className="author">By {selectedBlog.author}</span>
              <span className="date">{new Date(selectedBlog.createdAt).toLocaleDateString()}</span>
              <div className="tags">
                {selectedBlog.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            {/* Replace the content paragraph with this div */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
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
                      e.target.src = 'https://placehold.co/400x300/png?text=Blog+Image';
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

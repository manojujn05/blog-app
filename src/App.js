import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  const blogPosts =[
    {
      title: 'Man must explore, and this is exploration at its greatest',
      description: 'Problems look mighty small from 150 miles up',
      createdDate: 'September 24, 2023',
      createdBy: 'Mark'
    },
    {
      title: 'Science has not yet mastered prophecy',
      description: 'We predict too much for the next year and yet far too little for the next ten.',
      createdDate: 'August 24, 2023',
      createdBy: 'Adam'
    },
    {
      title: 'Failure is not an option',
      description: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      createdDate: 'August 2, 2023',
      createdBy: 'Roger'
    }
  ];
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                   {blogPosts.map((post, index)=>(
                    <Blog 
                    key={index}
                    title={post.title}
                    description={post.description}
                    createdDate={post.createdDate}
                    createdBy={post.createdBy}
                    />
                   ))}
                    
         
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default App;

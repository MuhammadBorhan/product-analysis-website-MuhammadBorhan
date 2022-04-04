import React from 'react';

const Blogs = () => {
    return (
        <div className='px-16 py-8'>
            <article className='border-2 p-4 text-justify mb-4'>
                <h1 className='text-3xl mb-2'><span className='font-bold'>Question Name:</span> What is Context API.</h1>
                <p className='text-xl'><span className='font-bold'>Answer: </span> Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease. Let's see how to use it. React context API, In this article you will explore what is Context API and how to use it in your React project. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the store and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </article>

            <article className='border-2 p-4 text-justify'>
                <h1 className='text-3xl mb-2'><span className='font-bold'>Question Name:</span> What is Sementic Tag.</h1>
                <p className='text-xl'><span className='font-bold'>Answer: </span> A semantic tag in HTML is a tag whose name clearly describes its purpose and content. HTML5 introduced several new semantic tags. These include main, aside, section, article and others. Semantic tags: form, header, table, and article these clearly define their content. HTML5 supports several semantic tags that better define the parts of a web page. The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. Semantic HTML tags allow you to add meaning to your markup so that search engines, screen readers, and web browsers can make sense of it.</p>
            </article>
        </div>
    );
};

export default Blogs;
import React from "react";

const Question2 = () => {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold text-justify ml-6">
                What are semantic tags?
            </h1>
            <p className="text-xl text-justify ml-6 w-2/3">
                Semantic tags are some html tags that have meaning associated
                with them. Other tags have no such meaning associated with them.
                Here meaning refers to information which is for browser and
                other devices which can access html files form internet. As an
                example &lt;section&gt; means a section in an html document
                where we can do the same work with &lt;div&gt; tag but it
                doesn't give any meaning to browser. Like this &lt;article&gt;
                refers to an article, &lt;nav&gt; means navigation bar,
                &lt;footer&gt; means a footer &lt;figure&gt; means an image and
                it has also figure caption.
                <br />
                Semantic tags are important for search engines to understand the
                purpose of a part of a website that gives better rank, smart and
                assistant devices like readers understand the meanings of
                semantic tags that helps visually impaired porson.
            </p>
        </div>
    );
};

export default Question2;

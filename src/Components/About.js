import React from 'react'

export default function About(props) {

  return (
    <>
      <div className="container d-flex align-items-center flex-column" style={{ color: props.mode === 'light' ? '#434242' : 'white' }}>
        <h1>About TextUtils</h1>
        <div className="card my-3"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#181D31', color: props.mode === 'light' ? '#434242' : 'white', }}>
          <div className="card-body">
            <h6 className="card-text" style={{lineHeight: "40px", fontSize: "1.2rem"}}>A text utility website is a platform designed to provide users with a variety of tools to manipulate and analyze text. Such a website may include features such as text editors, word counters, character counters, text formatting options, and even language translation tools.One common tool found on text utility websites is a character or word counter. This feature allows users to check the number of characters and/or words in a given text. This can be particularly useful for content creators who need to ensure that their work meets specific length requirements, such as in academic papers, news articles, or social media posts.Another common tool is the text editor, which allows users to create, edit, and format text in a user-friendly interface. A good text editor should provide users with a variety of formatting options, such as font styles, font sizes, alignment, and spacing, to make their text more appealing and easier to read. Text utility websites may also include more advanced tools for analyzing and manipulating text. For example, some platforms may offer sentiment analysis tools that can determine the emotional tone of a piece of text. Other websites may provide language translation tools that can translate text from one language to another in real-time. Finally, it's important to note that text utility websites can be helpful for a wide variety of users, including students, writers, bloggers, marketers, and professionals in various industries. By providing users with access to powerful tools for manipulating and analyzing text, text utility websites can help individuals improve their writing skills, save time, and ultimately become more productive in their work.</h6>
          </div>
        </div>
      </div>
    </>
  )
}

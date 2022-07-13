import { Link } from "react-router-dom";
import React, { useState } from "react";
import Filter2 from '../Filter/Filter2';


// export default function PickMeal({title1}) {
  export default function PickMeal({desc,title1}) {
const [state1, setState1] = useState(15);
  const handleChange = e => {
    setState1( e.target.value);
  }

  const muffinRecipes = [
        {
            title: "Mixed Berries Muffin",
            //image: "/img/gallery/img_1.png",
            thumbnail: "/assets/images/muffins/1.png",
        },
        {
            title: "Carrot Muffin",
            //image: "/img/gallery/img_5.png",
            thumbnail: "/assets/images/muffins/2.png",
        },
        {
            title: "Rasisn Muffin",
            //image: "/img/gallery/img_6.png",
            thumbnail: "/assets/images/muffins/3.png",
        },
        {
            title: "Blueberry Muffin",
            //image: "/img/gallery/img_4.png",
            thumbnail: "/assets/images/muffins/1.png",
        },
        {
            title: "Triple Mix Muffin",
            //image: "/img/gallery/img_10.png",
            thumbnail: "/assets/images/muffins/4.png",
        },
        {
            title: "Chocolate Chip",
            //image: "/img/gallery/img_1.png",
            thumbnail: "/assets/images/muffins/5.png",
        }, ]



  return (

<>


<div className='pb-5'>
         <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <div className="d-sm-flex align-items-center justify-content-between">
            <div>
        <h1 className="display-5 fw-bold">{title1}</h1>
        <p className="lead my-4">{desc}</p>
        <button className="btn btn-primary btn-lg" type="button">Check Out<br/>Selections</button>
        </div><div>
        <img className="img-fluid w-100 d-none d-sm-block" src="assets/images/me.png" alt="" />
        </div>
      </div>
      </div>
    </div>
    </div>


   <div className="row g-5">
    <div className="col-md-2">
      <div className="position-sticky" style={{top: "2rem"}}>
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="fst-italic">Categories</h4>
          <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
        </div>
        <Filter2/>

<div className="ps-2 range border-success">
  <label htmlFor="customRange2" className="ps-2 form-label">Timings</label>
  <input type="range" className="ps-2 form-range" min="15" max="120" id="customRange2" value={state1} onChange={handleChange}/>
       <h6 className="ps-2">Max time : {state1} mins</h6>
      </div>

      <div className="ps-2">
        <h4>Star Ratings</h4>
          <div className="row">
        <div class="btn-group flex-wrap" role="group" aria-label="Basic checkbox toggle button group">

  <input type="checkbox" class="col btn-check" id="btncheck1" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck1">1 Star<i className="bi bi-star-fill"/></label>

  <input type="checkbox" class="col btn-check" id="btncheck2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck2">2 Stars<i className="bi bi-star-fill"/></label>

  <input type="checkbox" class="col btn-check" id="btncheck3" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck3">3 Stars<i className="bi bi-star-fill"/></label>
    <input type="checkbox" class="col btn-check" id="btncheck4" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck4">4 Stars <i className="bi bi-star-fill"/></label>

  <input type="checkbox" class="col btn-check" id="btncheck5" autocomplete="off"/>
  <label class="btn btn-outline-success" for="btncheck5">5 Star<i className="bi bi-star-fill"/></label>
</div>
</div>

      </div>
        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li><a href="#/">March 2021</a></li>
            <li><a href="#/">February 2021</a></li>
            <li><a href="#/">January 2021</a></li>
            <li><a href="#/">December 2020</a></li>
            <li><a href="#/">November 2020</a></li>
            <li><a href="#/">October 2020</a></li>
            <li><a href="#/">September 2020</a></li>
            <li><a href="#/">August 2020</a></li>
            <li><a href="#/">July 2020</a></li>
            <li><a href="#/">June 2020</a></li>
            <li><a href="#/">May 2020</a></li>
            <li><a href="#/">April 2020</a></li>
          </ol>
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="#/">GitHub</a></li>
            <li><a href="#/">Twitter</a></li>
            <li><a href="#/">Facebook</a></li>
          </ol>
        </div>
      </div>
    </div>
    <div className="col-md-10">


      {/* <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>

      <article className="blog-post">
        <h2 className="blog-post-title mb-1">Sample blog post</h2>
        <p className="blog-post-meta">January 1, 2021 by <a href="#/">Mark</a></p>

        <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
        <hr/>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h2>Blockquotes</h2>
        <p>This is an example blockquote in action:</p>
        <blockquote className="blockquote">
          <p>Quoted text goes here.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Example lists</h3>
        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
        <ul>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>
        </ul>
        <p>And this is an ordered list:</p>
        <ol>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>
        </ol>
        <p>And this is a definition list:</p>
        <dl>
          <dt>HyperText Markup Language (HTML)</dt>
          <dd>The language used to describe and define the content of a Web page</dd>
          <dt>Cascading Style Sheets (CSS)</dt>
          <dd>Used to describe the appearance of Web content</dd>
          <dt>JavaScript (JS)</dt>
          <dd>The programming language used to build advanced Web sites and applications</dd>
        </dl>
        <h2>Inline HTML elements</h2>
        <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
        <ul>
          <li><strong>To bold text</strong>, use <code className="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
          <li><em>To italicize text</em>, use <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
          <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
          <li>Citations, like <cite>— Mark Otto</cite>, should use <code className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
          <li><del>Deleted</del> text should use <code className="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
          <li>Superscript <sup>text</sup> uses <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
        </ul>
        <p>Most of these elements are styled by browsers with few modifications on our part.</p>
        <h2>Heading</h2>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Sub-heading</h3>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <pre><code>Example code block</code></pre>
        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
      </article>

      <article className="blog-post">
        <h2 className="blog-post-title mb-1">Another blog post</h2>
        <p className="blog-post-meta">December 23, 2020 by <a href="#/">Jacob</a></p>

        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <blockquote>
          <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Example table</h3>
        <p>And don't forget about tables in these posts:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Upvotes</th>
              <th>Downvotes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>7</td>
              <td>9</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>21</td>
              <td>23</td>
            </tr>
          </tfoot>
        </table>

        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
      </article>

      <article className="blog-post">
        <h2 className="blog-post-title mb-1">New feature</h2>
        <p className="blog-post-meta">December 14, 2020 by <a href="#/">Chris</a></p>

        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <ul>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>
        </ul>
        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
      </article>

      <nav className="blog-pagination" aria-label="Pagination">
        <a className="btn btn-outline-primary rounded-pill" href="#/">Older</a>
        <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
      </nav>

    </div> */}

    <div className="vstack gap-3">
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src="/assets/images/muffins/4.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title1}</h5>
        <p className="card-text">The <strong>Best</strong> Homemade Muffin In The World. Must Try!</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <Link to='/bakery/oatmealmuffin' className="btn btn-primary stretched-link">View the Recipe</Link>
      </div>
    </div>
  </div>
</div>
{muffinRecipes.map((muffin,index)=>(
        <div className="card mb-3" key={index}>
  <div className="row g-0">
    <div className="col-md-4 bg-light border border-primary">
      <img src={muffin.thumbnail} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{muffin.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <a href="#/" className="btn btn-outline-primary disabled">Go to see {muffin.title} Recipe!</a>
      </div>
    </div>
  </div>
</div>
)) }
</div>

    
  </div>
</div>
</>

  )};
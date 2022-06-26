import React from 'react'

function Reviews() {
  return (
    <>
    <div className="my-5 pt-0 pt-md-3">
        <div className="border-bottom mb-4 pb-3">
          <h2 className="d-inline-block">Reviews</h2>
          <span className="f-size-24">(25)</span>
        </div>
<div className="card">
  <div className="card-header">
                                    <img className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="45"
                    height="45" />Jane Doe
  </div>
  <div className="card-body">
    <div className="card-title d-flex">
      <div className="p-2">
      <h5 className="me-2">I LOVE IT!</h5></div>
      <div className="p-2">
       <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i style={{color: '#f3da35'}} className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>
                                <div className="ms-auto p-2">Posted: <strong>02/26/22</strong> 15:45:12</div>
    </div>
    {/* <h5 className="card-title">I LOVE IT!</h5> */}
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
    Reply (21)
    <button className="btn btn-outline-primary"><i className="bi bi-hand-thumbs-up-fill"></i></button><span className="me-2"><strong>42</strong></span>
    <button className="btn btn-outline-danger"><i className="bi bi-hand-thumbs-down-fill"></i></button><span>15</span>
  </div>
</div>
<div className="card">
  <div className="card-header">
                                    <img className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="45"
                    height="45" />Jane Doe
  </div>
  <div className="card-body">
    <div className="card-title d-flex">
      <div className="p-2">
      <h5 className="me-2">I LOVE IT!</h5></div>
      <div className="p-2">
       <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i style={{color: '#f3da35'}} className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>
                                <div className="ms-auto p-2">Posted: <strong>02/26/22</strong> 15:45:12</div>
    </div>
    {/* <h5 className="card-title">I LOVE IT!</h5> */}
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
    Reply (2)
    <button className="btn btn-outline-primary"><i className="bi bi-hand-thumbs-up-fill"></i></button><span className="me-2"><strong>42</strong></span>
    <button className="btn btn-outline-danger"><i className="bi bi-hand-thumbs-down-fill"></i></button><span>15</span>
  </div>
</div>
        <div href="#0" className="btn btn-outline-secondary d-grid col-6 mx-auto my-2 py-1 py-md-3">Load 25 more comments</div>
      </div>
      
      <div className="write-comment">
        <div className="d-sm-flex align-items-center flex-wrap">
          <h6>Write a comment</h6>
          <p className="mb-0 ml-auto"><a href="#0" className="text-primary">Login</a> to post a comment</p>
        </div>
        <form className="bg-lightest-gray rounded-6 mt-3 d-flex flex-wrap p-4">
          <textarea className="form-control">I love the muffins. Amazing! 🔥|</textarea>
          <div className="mt-auto ml-auto">
            <button type="button" className="btn btn-primary px-5">Post comment</button>
          </div>
        </form>
      </div>
      </>
  )
}

export default Reviews


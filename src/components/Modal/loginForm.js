import React from 'react'

function loginForm() {
  return (
    <form>
    <img class="mb-4" src="/assets/images/faceYourFood.png" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"/>
      <label htmlFor="emailInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="passwordInput" placeholder="123456"/>
      <label htmlFor="passwordInput">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember"/> Remember me For Future Events
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
  )
}

export default loginForm
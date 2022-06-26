export default function Prices (){
    return(
<section className="py-3"style={{backgroundColor:"#3A5BA0"}}>
<div id="prices" className="container-md mt-5">
    <div className="card">
<h1 className="text-center text-primary"><b>Services &amp; Prices</b></h1>
                    <div className="row my-5 g-5 justify-content-around align-items-center">
                <div className="col-6 col-lg-6">
                    <img src="/assets/images/car1.png" className="img-fluid" alt="ebook" useMap="#image-map"/>
                <map name="image-map">
                    <area target="" alt="Wiper Blades" title="Wiper Blades" href="#wipers" coords="75,64,51" shape="circle"/>
                    <area target="" alt="Engine Air Filter" title="Engine Air Filter" href="#filter" coords="75,242,49" shape="circle"/>
                    <area target="" alt="Tire Purchase/Installation" title="Tire Purchase/Installation" href="#tire" coords="74,372,51" shape="circle"/>
                    <area target="" alt="Lights" title="Lights" href="#light" coords="686,65,65" shape="circle"/>
                    <area target="" alt="Car Battery" title="Car Battery" href="#battery" coords="685,256,75" shape="circle"/>
                    <area target="_blank" alt="Oil Filter" title="Oil Filter" href="#oil" coords="685,429,69" shape="circle"/>
                    <area target="" alt="Lights" title="Lights" href="#light" coords="686,65,39" shape="circle"/>
                    <area target="" alt="Car Battery" title="Car Battery" href="#battery" coords="685,256,41" shape="circle"/>
                    <area target="_blank" alt="Oil Filter" title="Oil Filter" href="#oil" coords="685,429,39" shape="circle"/>
                </map>
                </div>
                <div className="col-lg-6">
        
        <div className="card-body text-center py-5">
            <h4 className="card-title">Select A Service to View Our Prices </h4>

            <div className="accordion" id="chapters">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                                   Oil Change
                                </button>
                            </h2>
                            <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                    <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
                                    Air Filters
                                </button>
                            </h2>
                            <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-2"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                        <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">
                                    Engine Tune-Up
                                </button>
                            </h2>
                            <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-3"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                       <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
                                    Tire Purchase
                                </button>
                            </h2>
                            <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-4"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                        <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                                    Tire Installation
                                </button>
                            </h2>
                            <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-5"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                        <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-6" aria-expanded="false" aria-controls="chapter-6">
                                    Brakes
                                </button>
                            </h2>
                            <div id="chapter-6" className="accordion-collapse collapse" aria-labelledby="heading-6"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                        <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-7" aria-expanded="false" aria-controls="chapter-7">
                                    Battery Installation
                                </button>
                            </h2>
                            <div id="chapter-7" className="accordion-collapse collapse" aria-labelledby="heading-7"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                        <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                                                <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-8">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-8" aria-expanded="false" aria-controls="chapter-8">
                                    Other
                                </button>
                            </h2>
                            <div id="chapter-8" className="accordion-collapse collapse" aria-labelledby="heading-8"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                                                        <div className="serviceDescription">
                                        <h5> Description</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    </div>
                                                        <div className="table-responsive">
  <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <button className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">Begin Shopping</button>
                    </div>
            

        </div>
    </div>
</div>
</section>
    )}

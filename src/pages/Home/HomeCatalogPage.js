import Layout from "../../layout/layout";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HomeCatalogPage.scss";
import article151 from "../../assets/imgs/articles/151.png";

const HomeCatalogPage = () => {
  return (
    <Layout>
      <div class="myWimage" >
        <div class="myWimageRd justify-content-center align-item-center h100">
          <div class="col-md-6 m-0 p-5">
            <h1 class="pt-5">CATALOG</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ex
              accusantium nisi aliquid temporibus esse ut, cupiditate tempora
              voluptate delectus natus totam et quae eaque veritatis nulla
              tempore unde aliquam?
            </p>
          </div>
        </div>
      </div>

      {/* <!-- ///////////////////////////////////////////////////////// --> */}
      <div class="container text-light p-3">
        <div class="card-group row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
          <div class="myCard1 card m-2 ">
            <div class="card-body">
              <p class="card-text">lorem ipsum</p>
              <h5 class="card-title"> Categories</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                minus laudantium deleniti cum, libero quo recusandae iure sed
                enim impedit, cumque aspernatur iste repudiandae eum earum eaque
                numquam voluptate repellendus.
              </p>
            </div>
          </div>

          <div
            class="myCard2 card m-2 p-0"
            
          >
            <div class="myCardRd m-0">
              <div class="card-body  h-100 align-text-bottom">
                <p class="card-text">lorem ipsum</p>
                <h5 class="card-title">lorem ipsum</h5>
                <p class="card-text">lorem ipsum</p>
              </div>
            </div>
          </div>

          <div
            class="myCard3 card   m-2 "
           
          >
            <div class="myCardRd m-0">
              <div class="card-body  bottom-0">
                <p class="card-text">lorem ipsum</p>
                <h5 class="card-title">lorem ipsum</h5>
                <p class="card-text">lorem ipsum</p>
              </div>
            </div>
          </div>

          <div
            class="myCard4 card m-2  "
            
          >
            <div class="myCardRd">
              <div class="card-body  bottom-0">
                <p class="card-text">lorem ipsum</p>
                <h5 class="card-title">lorem ipsum</h5>
                <p class="card-text">lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /////////////////////////////////////// --> */}
      <div class="container p-3">
        <div class="row">
          <div class="col-md-4">Showing 1 - 15 of 22 results</div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="row">
              <div class="col">
                <i>Filter</i>
              </div>
              <div class="col">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort by Price
                  </button>
                  <ul class="dropdown-menu">
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <i>Icon</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ///////////// --> */}
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <div class="col p-3">
            <div class="card h-100 text-center m-2">
              <img class="card-img-top" src={article151} alt="article151" />
              <h5 class="cartd-title">Zurich Vision 60×60</h5>
              <p class="card-text">237.99 SAR</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ////////////////// --> */}
      <div class="container col-6 col-md-2  mx-auto p-5">
        <button
          type="button"
          class="btn btn-primary text-center btn-dark w-100"
        >
          LOAD MORE
        </button>
      </div>
      {/* <!-- //////////////////// --> */}
      <div class="container myRectangle ">
        <div class=" row my-3">
          <div class="myRectangleT col-12 col-md-4 p-2) ">
            <h4>Promotional Banner</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              obcaecati magnam at perferendis ipsum excepturi praesentium quos
              unde harum! Eaque, quod dicta veritatis debitis impedit sint
              accusamus ipsa possimus rem.
            </p>
          </div> 
        </div>
      </div>

    </Layout>
  );
};
export default HomeCatalogPage;

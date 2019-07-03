import React from "react";

const Shipment = props => {
  return (
    <>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>{props.nameSHIP}</h1>
      </section>
      {/* Main content */}
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">List of Items</h3>
              </div>

              {/* /.box-header */}

              <div className="box-body">
                <div
                  id="example2_wrapper"
                  className="dataTables_wrapper form-inline dt-bootstrap"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example2"
                        className="table table-bordered table-hover dataTable"
                        role="grid"
                        aria-describedby="example2_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              // aria-label="Rendering engine: activate to sort column descending"
                            >
                              <div className="input-group margin">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                  onChange={props.onChange}
                                  value={props.value}
                                />
                                <div className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-block btn-info"
                                    onClick={props.onClick}
                                  >
                                    Add Item
                                  </button>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example2"
                        className="table table-bordered table-hover dataTable"
                        role="grid"
                        aria-describedby="example2_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              // aria-label="Rendering engine: activate to sort column descending"
                            >
                              Item name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              // aria-label="Browser: activate to sort column ascending"
                            >
                              Delete button
                            </th>
                          </tr>
                        </thead>
                        {props.listOfItems}
                      </table>
                      <button
                        type="button"
                        className="btn  btn-danger btn-flat margin"
                        onClick={props.deleteShipment}
                      >
                        Delete Shipment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.box-body */}
            </div>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
    </>
  );
};

export default Shipment;

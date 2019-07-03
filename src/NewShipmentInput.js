import React from "react";

const NewShipmentInput = props => {
  return (
    <>
      <section className="content-header">
        <h1>Add a new Shipment</h1>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
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
                                    onClick={props.buttonClick}
                                  >
                                    Add Shipment
                                  </button>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewShipmentInput;

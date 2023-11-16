const coupons = [{
  name:"October Offer",
  code: "XDF-GTY",
  startDate:12-10-2023,
  endDate:13-10-2023,
  offerValue:100,
  discount:10,
  status:true,

},
{
  name:"December Offer",
  code: "DHT-SGU",
  startDate:15-12-2023,
  endDate:30-12-2023,
  offerValue:500,
  discount:50,
  status:true,
}]

const getAllCoupons = (req, res) => {
    res.send({
      message: "Coupons are displayed here",
      count: coupons.length,
      coupon: coupons,
    });
  };
  
  const getCouponsByid = (req, res) => {
    const id = Number(req.params.id);
  
    if (!isNaN(id) && id >= 0 && id < coupons.length) {
      res.send({
        message: "Data is Fetched successfully",
        coupon: coupons[id],
      });
    } else {
      res.status(404).send({
        message: "Invalid ID. Coupon doesn't exist",
      });
    }
  };
  
  const createCoupons = (req, res) => {
    const data = req.body;
    const existingCoupon = coupons.find((coupon) => coupon.code === data.code);
    if (!existingCoupon) {
      coupons.push(data);
      res.status(201).send({
        message: "Coupon created successfully",
      });
    } else {
      res.status(400).send({
        message: "Coupon Already exists",
      });
    }
  };
  
  const editCoupons = (req, res) => {
    const id = Number(req.params.id);
    if (!isNaN(id) && id >= 0 && id < coupons.length) {
      const updatedData = req.body;
      coupons[id] = updatedData;
      res.status(200).send({
        message: "Coupon updated successfully",
      });
    } else {
      res.status(404).send({
        message: "Invalid ID",
      });
    }
  };
  
  const deleteCoupons = (req, res) => {
    const id = Number(req.params.id);
    if (!isNaN(id) && id >= 0 && id < coupons.length) {
      coupons.splice(id, 1);
      res.status(200).send({
        message: "Coupon deleted successfully",
      });
    } else {
      res.status(404).send({
        message: "Invalid ID",
      });
    }
  };
  
  module.exports = {
    getAllCoupons,
    getCouponsByid,
    createCoupons,
    editCoupons,
    deleteCoupons,
  };
  
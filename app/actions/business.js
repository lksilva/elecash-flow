// @flow
// const update = (todoId, isDone) => (dispatch) => {
//   dispatch({
//     type: 'SET_SAVING',
//     saving: true
//   });
//   // Function is expected to return a promise
//   callUpdateApi(todoId, isDone).then(updatedTodo => {
//     dispatch({
//       type: 'SET_SAVING',
//       saving: false
//     });
//   });
//   // TBD: Handle errors
// }
// export const HANDLE_SUBMIT_BUSINESS = 'HANDLE_SUBMIT_BUSINESS';
export const PAY = 'PAY';
export const LIST_BUSINESS = 'LIST_BUSINESS';

import { remote } from 'electron';

const db = remote.getGlobal('db');
import { ObjectID } from 'mongodb';

type actionType = {
  +type: string
};

export const payOff = (value) => ({
  type: PAY,
  id: value
});

export const populate = (list) => ({
  type: LIST_BUSINESS,
  payload: list
});

export function getBusinessList() {
  return (dispatch: (action: actionType) => void) => {
    db.collection('business').find().sort({ billingDate: -1 }).toArray((err, businessList) => {
      dispatch(populate(businessList.map(register => register)));
    });
  };
}

export function find(name) {
  return (dispatch: (action: actionType) => void) => {
    db.collection('business').find({ clientName:{'$regex': name} }).sort({ billingDate: -1 }).toArray((err, businessList) => {
      dispatch(populate(businessList.map(register => register)));
    });
  };
}

export function saveBusiness(item) {
  if (item.plotsPayment) {
    let businessArr = [];
    const priceForPlot = (item.price / item.plotsPayment).toFixed(2);
    businessArr = [...businessArr, Object.assign({}, item, { price: priceForPlot })];

    for (let i = 1; i < item.plotsPayment; i++) {
      const date = new Date(item.billingDate);
      date.setMonth(date.getMonth() + i);
      const newBusiness = Object.assign({}, item, { billingDate: date, price: priceForPlot });
      businessArr = [...businessArr, newBusiness];
    }

    return (dispatch: (action: actionType) => void) => {
      db.collection('business').insertMany(businessArr, (err, result) => {
        console.log(err);
        console.log(result);
        dispatch(getBusinessList());
      });
    };
  }
  return (dispatch: (action: actionType) => void) => {
      db.collection('business').insert({
        clientName: item.clientName,
        dateRB: item.dateRB,
        typePayment: item.typePayment,
        price: item.price,
        billingDate: item.billingDate,
        paidDate: item.paidDate
      }, (err, result) => {
        dispatch(getBusinessList());
      });
    };
}

export function pay(id) {
  return (dispatch: (action: actionType) => void) => {
    db.collection('business').update({ _id: ObjectID(id) }, { $set: { paidDate: new Date() } }, { w: 1 }, (err, result) => {
      dispatch(getBusinessList());
    });
  };
}

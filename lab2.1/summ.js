const summ_f = (mass)=>{
const reducer = (acc, curVal) => acc + curVal;

return mass.reduce(reducer);
};

module.exports = summ_f;

















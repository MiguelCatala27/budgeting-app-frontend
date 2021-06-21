import TransactionDetail from "../Components/TransactionDetails";
import "../App.css";


const Show = ({deleteTransaction}) => {
  return (
    <section>
      <h1>Transaction Details</h1>
      <TransactionDetail deleteTransaction={deleteTransaction}/>
    </section>
  );
};

export default Show;
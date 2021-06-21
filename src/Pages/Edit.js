import TransactionEdit from "../Components/TransactionEdit";

const Edit = ({updateTransaction}) => {
  return (
    <section>
      <h1>Edit Transaction</h1>
      <TransactionEdit updateTransaction={updateTransaction}/>
    </section>
  );
};

export default Edit;
import TransEditForm from "../Components/TransactionEdit";

const Edit = ({updateTransaction}) => {
  return (
    <section>
      <h1>Edit Transaction</h1>
      <TransEditForm updateTransaction={updateTransaction}/>
    </section>
  );
};

export default Edit;
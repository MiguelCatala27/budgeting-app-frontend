import TransactionNew from "../Components/TransactionNew";

const New = ({addTransaction}) => {
  return (
    <section className="New">
      <h2>Add a new item</h2>
      <TransactionNew addTransaction={addTransaction}/>
    </section>
  );
};

export default New;

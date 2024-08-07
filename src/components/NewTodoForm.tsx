import { FormEvent, useState } from "react";

export default function NewTodoForm({ onSubmit }: any) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

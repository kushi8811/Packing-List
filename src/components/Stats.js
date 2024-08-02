export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! </em>
      </p>
    );
  const numItems = items.length; //Stats
  const numPacked = items.filter((item) => item.packed).length;
  const percetage = Math.round((numPacked * 100) / numItems);

  return (
    <footer className="stats">
      <em>
        {percetage === 100
          ? "Everything is packed and ready to go"
          : ` You have ${numItems} items on your list , and you already packed
          
        ${numPacked} (${percetage}%)`}
      </em>
    </footer>
  );
}

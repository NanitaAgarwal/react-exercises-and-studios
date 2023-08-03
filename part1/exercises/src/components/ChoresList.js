import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h1 className={styles.choresHeading}>Chores List</h1>
         <ul className={styles.choresText}>
            <li>Laundry</li>
            <li>Library</li>
            <li>Groceries</li>
         </ul>
      </div>
   );
}
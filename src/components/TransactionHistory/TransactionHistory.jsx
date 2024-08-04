

import css from "./TransactionHistory.module.css"


export default function TransactionHistory ({items}) {
    function firstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <table className={css.table}>
            <thead>
                <tr className={css.tr}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tbody}>
                {items.map(item => (
                    <tr className={css.tr} key={item.id}>
                        <td className={css.td}>{firstLetter(item.type)}</td>
                        <td className={css.td}>{item.amount}</td>
                        <td className={css.td}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
         </table>
    );
}

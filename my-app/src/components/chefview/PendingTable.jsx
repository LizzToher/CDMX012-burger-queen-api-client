import React from 'react';
import styles from './ChefView.module.css';

const PendingTable = ({orders}) => {
	return (
		<div className={styles.menuOrderContainer}>
			<article className={`${styles.split} ${styles.left}`}>
						<section className={styles.tableContainer}>
							<table>
								<thead>
									<tr>
										<th>Producto</th>
										<th>Cantidad</th>
										<th>Mesa</th>
										<th>Status</th>
										<th>tiempo</th>
									</tr>
								</thead>
								<tbody>
									{orders &&
										orders.map((product) => {
											return (
												<tr key={product.id}>
													<td>{product.product}</td>
													<td>{product.quantity}</td>
													<td>{product.table}</td>
													<td>{product.status}</td>
													<td>{product.date}</td>
												</tr>
											);
										})
									}
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>
											<button type='submit' className={styles.sendProduct}>Preparando</button>
											</td>
									</tr>
								</tfoot>
							</table>
						</section>
			</article>
		</div>
	);
};

export default PendingTable;

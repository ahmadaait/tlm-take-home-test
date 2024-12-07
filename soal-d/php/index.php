<?php
include 'mock_data.php';

// Fungsi utama
function fn_my_hartono_send_so($ord)
{
  // Maintenance tiap jam 22:00 s/d 06:00
  date_default_timezone_set('Asia/Jakarta');
  $curr_date = strtotime(date('Y-m-d H:i'));
  $date_from = strtotime(date('Y-m-d') . ' 22:00');
  $date_to_str = date('Y-m-d', strtotime("+1 day", time()));
  $date_to = strtotime($date_to_str . ' 06:00');

  // Ambil data order berdasarkan order_id
  $od_data = db_get_row('SELECT store_code, hpc_web, is_gift_roulette, payment_id, user_id, promo_xmas_order, disable_so, flag_he_hm, total_shipping_discount, shipping_cost, total, total_insurance, shipping_insurance, payment_surcharge, s_country, s_state, s_kecamatan, s_kelurahan FROM ?:orders WHERE order_id = ?i', $ord['order_id']);

  // if time is between 22:00 and 06:00, return false
  if ($curr_date >= $date_from && $curr_date <= $date_to) {
    return false;
  }

  // if total shipping discount is more than shipping cost, set total shipping discount to shipping cost
  if ($od_data['total_shipping_discount'] > $od_data['shipping_cost']) {
    $od_data['total_shipping_discount'] = $od_data['shipping_cost'];
  }

  // if disable_so is 1, return false
  if ($od_data['disable_so'] == 1) {
    return false;
  }

  return true;
}

$order1 = ['order_id' => 1];
$order2 = ['order_id' => 2];

$result1 = fn_my_hartono_send_so($order1);
$result2 = fn_my_hartono_send_so($order2);

echo "Order 1 result: " . ($result1 ? 'True' : 'False') . "\n";
echo "Order 2 result: " . ($result2 ? 'True' : 'False') . "\n";
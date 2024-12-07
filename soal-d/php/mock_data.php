<?php
function db_get_row($query, $order_id)
{
  // Mock data berdasarkan order_id
  $mock_data = [
    1 => [
      'store_code' => 'S001',
      'hpc_web' => 1,
      'is_gift_roulette' => 0,
      'payment_id' => 101,
      'user_id' => 1001,
      'promo_xmas_order' => 0,
      'disable_so' => 0,
      'flag_he_hm' => 0,
      'total_shipping_discount' => 100,
      'shipping_cost' => 150,
      'total' => 500,
      'total_insurance' => 50,
      'shipping_insurance' => 20,
      'payment_surcharge' => 5,
      's_country' => 'ID',
      's_state' => 'Jawa Barat',
      's_kecamatan' => 'Kecamatan A',
      's_kelurahan' => 'Kelurahan B'
    ],
    2 => [
      'store_code' => 'S002',
      'hpc_web' => 1,
      'is_gift_roulette' => 1,
      'payment_id' => 102,
      'user_id' => 1002,
      'promo_xmas_order' => 1,
      'disable_so' => 1,  // Kondisi ini akan mengembalikan false
      'flag_he_hm' => 0,
      'total_shipping_discount' => 200,
      'shipping_cost' => 150,
      'total' => 600,
      'total_insurance' => 70,
      'shipping_insurance' => 25,
      'payment_surcharge' => 10,
      's_country' => 'ID',
      's_state' => 'Jawa Timur',
      's_kecamatan' => 'Kecamatan B',
      's_kelurahan' => 'Kelurahan C'
    ]
  ];

  // Mengembalikan data berdasarkan order_id
  return isset($mock_data[$order_id]) ? $mock_data[$order_id] : null;
}
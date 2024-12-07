# Soal No. 4

    Jawaban: Key, Hash Function, Bucket, Collision

# Soal No. 5

    Jawaban: library Buffer

# Soal No. 6

Jawaban:

    Identifikasi Kerentanan Keamanan:
      - SQL Injection: bisa terjadi ketika input pengguna tidak divalidasi, memungkinkan query SQL diubah dan dieksekusi oleh pengguna.
      - Cross Site Scripting (XSS): bisa terjadi ketika aplikasi tidak memvalidasi atau menyaring input pengguna sebelum ditampilkan.
      - Ddos: bisa terjadi karena attacker melakukan serangan terhadap server dengan cara mengirimkan banyak request secara bersamaan.
      - Insecure Deserialization: bisa terjadi ketika data yang diserialisasi tidak divalidasi, memungkinkan attacker untuk mengirimkan data yang berbahaya.

    Pencegahan:
      - SQL Injection: menggunakan prepared statement atau parameterized query, memvalidasi input pengguna, menggunakan ORM.
      - Cross Site Scripting (XSS): memvalidasi input pengguna, menggunakan library yang menyediakan fitur untuk menghindari XSS.
      - Ddos: menggunakan firewall, load balancer, atau service yang menyediakan proteksi Ddos.
      - Insecure Deserialization: memvalidasi data yang diserialisasi.

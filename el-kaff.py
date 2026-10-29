from pathlib import Path

from flask import Flask, send_from_directory

# Mengambil lokasi folder yang berisi file el-kaff.py
FOLDER_PROYEK = Path(__file__).resolve().parent

app = Flask(__name__)


@app.route("/")
def beranda():
    # Menampilkan index.html yang ada di folder utama
    return send_from_directory(FOLDER_PROYEK, "index.html")


@app.route("/css/<path:nama_file>")
def file_css(nama_file):
    return send_from_directory(FOLDER_PROYEK / "css", nama_file)


@app.route("/js/<path:nama_file>")
def file_javascript(nama_file):
    return send_from_directory(FOLDER_PROYEK / "js", nama_file)


@app.route("/img/<path:nama_file>")
def file_gambar(nama_file):
    return send_from_directory(FOLDER_PROYEK / "img", nama_file)


if __name__ == "__main__":
    app.run(debug=True)
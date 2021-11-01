// Bismillah
// By Kotz Ganz:v
// Edit Hati Hati Erorr Nangis
// Gausah Di Jual Asu

class menu {
  help(pushname) {
        return `Halo ${pushname}
Ini Menu Yang Tersedia
        `.trim()
    }

    menuList() {
        return [
            {title: "Pilih Salah Satu", rows: [
                {
                    title: "FF",
                    description: "", // Kalo Mau Tambahin Yah Silahkan
                    rowId: `${this.prefix}ff`
                },
                {
                    title: "ML FAST",
                    description: "", // Kalo Mau Tambahin Yah Silahkan
                    rowId: `${this.prefix}ml fast`
                },
                {
                    title: "Ml Semi",
                    description: "", // Kalo Mau Tambahin Yah Silahkan
                    rowId: `${this.prefix}ml semi`
                }
            ]}
        ]
    }
}
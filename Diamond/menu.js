// Bismillah
// By Kotz Ganz:v
// Edit Hati Hati Erorr Nangis
// Gausah Di Jual Asu

class menu {
  
      /**
     * @param {String} prefix
    **/
    constructor(prefix) {
        if (!prefix) throw new Error("Unknown prefix : set prefix first")
        this.prefix = prefix
    }
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
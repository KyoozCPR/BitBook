const parole = [
    "ADSL",
    "Analogico",
    "Accumulatore",
    "Account",
    "Antivirus",
    "Asincrono",
    "Backup",
    "Baud",
    "Bandwidth",
    "Bitrate",
    "BIOS",
    "Bootstrap",
    "Browser",
    "Buffer",
    "Bus",
    "Chip",
    "Chipset",
    "Client",
    "Case",
    "Clock",
    "Console",
    "Com",
    "Cookie",
    "Compilatore",
    "Desktop",
    "Database",
    "Digitale",
    "DRAM",
    "Driver",
    "DPI",
    "EPROM",
    "EEPROM",
    "Extranet",
    "File",
    "Firmware",
    "Hardware",
    "Hertz",
    "Hub",
    "ISDN",
    "Installare",
    "Ipertesto",
    "ISP",
    "LAN",
    "Laptop",
    "Mainframe",
    "MAN",
    "Memoria cache",
    "Motherboard",
    "Modem",
    "MIME",
    "Multitasking",
    "Nat",
    "Network",
    "Netiquette",
    "Output",
    "OCR",
    "Periferica",
    "Pixel",
    "Provider",
    "RAM",
    "ROM",
    "Router",
    "Record",
    "Registro",
    "SRAM",
    "Sincrono",
    "Sequenziale",
    "Software",
    "SSD",
    "VLSI",
    "Zip",
]

for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * parole.length)
    const parola = document.createElement('li')
    parola.textContent = parole[random]
    const element = document.getElementsByClassName('parole_suggerite')[0]
    element.appendChild(parola)
}

function reorda() {
    let file = new Audio('src/reorda.m4a')
    let img = document.getElementById('reorda')

    img.style.display = 'block'
    setTimeout(function () {
        img.style.display = 'none'
    }, 20000)
    file.play()
}
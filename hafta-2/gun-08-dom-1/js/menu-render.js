import { menuData } from "../veri-js/menu-data.js";

    // <div class="m-item">
    // <div class="m-line">
    //     <span class="m-name">Espresso</span>
    //     <span class="m-leader"></span>
    //     <span class="m-price">65₺</span>
    // </div>
    // <span class="m-desc">Tek shot; yoğun, kısa.</span>
    // </div>

export function renderMenu() {
    function createMenuItem(urun) {
        // Dış kapsayıcı (.m-item)
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("m-item");

        // Satır (.m-line)
        const lineDiv = document.createElement("div");
        lineDiv.classList.add("m-line");

        // Satır içi (m-name, m-leader, m-price)
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("m-name");
        nameSpan.textContent = urun.ad;

        const leaderSpan = document.createElement("span");
        leaderSpan.classList.add("m-leader");

        const priceSpan = document.createElement("span");
        priceSpan.classList.add("m-price");
        priceSpan.textContent = urun.fiyat + "₺";

        // Açıklama Span
        const descSpan = document.createElement("span");
        descSpan.classList.add("m-desc");
        descSpan.textContent = urun.aciklama;

        // Span'leri .m-line içine bağlıyoruz
        lineDiv.appendChild(nameSpan);
        lineDiv.appendChild(leaderSpan);
        lineDiv.appendChild(priceSpan);

        // .m-line ve .m-desc elemanlarını ana .m-item div'ine bağlıyoruz
        itemDiv.appendChild(lineDiv);
        itemDiv.appendChild(descSpan);

        return itemDiv;
    }

    Object.entries(menuData).forEach(([kategoriAdi, urunlerDizisi]) => {
        const container = document.querySelector(`[data-items="${kategoriAdi}"]`);

        if(!container) return;

        urunlerDizisi.forEach(urun => {
            const urunElementi = createMenuItem(urun);
            container.appendChild(urunElementi);
        });
    });
}
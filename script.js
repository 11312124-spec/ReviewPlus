
const influencerBtn = document.getElementById("influencerBtn");
const consumerBtn = document.getElementById("consumerBtn");
const result = document.getElementById("result");

// 網紅推薦與開箱
influencerBtn.addEventListener("click", function() {
    result.innerHTML = `
        <div class="review-card">
            <div class="review-card-title">
                <h2>網紅推薦專區</h2>
                <span>推薦資訊</span>
            </div>

            <div class="influencer-image">
                商品圖片展示區
            </div>

            <h3>商品：保濕精華液</h3>

            <ul>
                <li>推薦來源：美妝創作者</li>
                <li>推薦內容：保濕效果、使用心得</li>
                <li>推薦形式：影片開箱、業配介紹</li>
                <li>參考資訊：商品優點及推薦理由</li>
            </ul>

            <p class="notice">示意資料，非真實商品評測。</p>
        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// 一般消費者真實評價
consumerBtn.addEventListener("click", function() {
    result.innerHTML = `
        <div class="review-card">
            <div class="review-card-title">
                <h2>一般消費者真實評價</h2>
                <span>使用心得</span>
            </div>

            <p>消費者 A：商品外觀不錯，使用起來也很方便。</p>

            <p>消費者 B：價格稍微偏高，但整體品質還可以。</p>

            <p>消費者 C：實際使用後，覺得和預期有些差異。</p>

            <p class="notice">
                以上為示範評論，正式展示時會再替換成蒐集到的公開評論。
            </p>
        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

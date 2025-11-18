document.addEventListener('DOMContentLoaded', () => {
    const userAgentDiv = document.getElementById('userAgent');
    const copyBtn = document.getElementById('copyBtn');
    const messageDiv = document.getElementById('message');
    const popularUAsDiv = document.getElementById('popularUAs');
    const infoBtn = document.getElementById('infoBtn');

    // Display the user-agent
    userAgentDiv.textContent = navigator.userAgent;

    // Popular user-agents with approximate market shares (as of late 2024)
    const popularUAs = [
        { name: 'Chrome', type: 'Stable', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', percent: 65 },
        { name: 'Chrome', type: 'Latest', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', percent: null },
        { name: 'Safari', type: 'Stable', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15', percent: 18 },
        { name: 'Safari', type: 'Latest', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Safari/605.1.15', percent: null },
        { name: 'Edge', type: 'Stable', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0', percent: 5 },
        { name: 'Edge', type: 'Latest', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0', percent: null },
        { name: 'Firefox', type: 'Stable', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0', percent: 3 },
        { name: 'Firefox', type: 'Latest', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0', percent: null },
        { name: 'Opera', type: 'Stable', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 OPR/96.0.4693.104', percent: 1 },
        { name: 'Opera', type: 'Latest', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 OPR/97.0.4693.104', percent: null },
        { name: 'Samsung Internet', type: 'Stable', ua: 'Mozilla/5.0 (Linux; Android 13; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36 SamsungBrowser/21.0', percent: 3 },
        { name: 'Samsung Internet', type: 'Latest', ua: 'Mozilla/5.0 (Linux; Android 14; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 SamsungBrowser/22.0', percent: null }
    ];

    // Render popular UAs
    popularUAs.forEach(ua => {
        const div = document.createElement('div');
        div.className = 'ua-item';
        div.innerHTML = `<span>${ua.name} ${ua.type}${ua.percent ? ' - ' + ua.percent + '%' : ''}:</span> <button class="ua-copy-btn" data-ua="${ua.ua}" data-name="${ua.name}" data-type="${ua.type}">Copy</button>`;
        popularUAsDiv.appendChild(div);
    });

    // Copy button event listener for current UA
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(navigator.userAgent);
            messageDiv.textContent = 'Current User-Agent copied!';
            messageDiv.style.display = 'block';
            // Hide message after 2 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
            messageDiv.textContent = 'Failed to copy. Please copy manually.';
            messageDiv.style.display = 'block';
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 2000);
        }
    });

    // Info button event listener
    infoBtn.addEventListener('click', () => {
        alert('User-Agents are text strings browsers send to websites to identify browser type, version, and OS.\n\nThis extension shows your current UA and popular ones from major browsers (stable and latest versions).\n\nUse copy buttons for testing web compatibility and debugging.');
    });

    // Event delegation for popular UA copy buttons
    popularUAsDiv.addEventListener('click', async (e) => {
        if (e.target.classList.contains('ua-copy-btn')) {
            const uaStr = e.target.getAttribute('data-ua');
            const name = e.target.getAttribute('data-name');
            try {
                await navigator.clipboard.writeText(uaStr);
                const type = e.target.getAttribute('data-type');
                messageDiv.textContent = `${name} ${type} user-agent copied!`;
                messageDiv.style.display = 'block';
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
                messageDiv.textContent = 'Failed to copy.';
                messageDiv.style.display = 'block';
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 2000);
            }
        }
    });
});

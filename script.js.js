document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const cards = document.querySelectorAll('.card');
    const dynamicImage = document.getElementById('dynamicImage');
    const imageCaption = document.getElementById('imageCaption');

    const hotspotBtns = document.querySelectorAll('.hotspot-btn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    // 0시 축제 스토리에 맞춘 이미지 데이터
    const storyData = {
        1: {
            img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
            caption: "화려한 야경과 많은 수의 방문객으로 붐비는 축제 현장"
        },
        2: {
            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
            caption: "도로 전면 통제로 인한 도심 우회도로 교통 체증"
        },
        3: {
            img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
            caption: "수십억 예산 투입 대비 실효성 및 정체성에 대한 논란"
        }
    };

    // 스크롤 진행 바
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // 스크롤 감지 및 이미지 변경
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach(card => card.classList.remove('active'));
                
                const activeCard = entry.target;
                activeCard.classList.add('active');

                const step = activeCard.getAttribute('data-step');
                if (storyData[step]) {
                    dynamicImage.style.opacity = '0';
                    setTimeout(() => {
                        dynamicImage.src = storyData[step].img;
                        imageCaption.textContent = storyData[step].caption;
                        dynamicImage.style.opacity = '1';
                    }, 200);
                }
            }
        });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));

    // 모달 창 클릭 이벤트
    hotspotBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const desc = btn.getAttribute('data-desc');
            const imgSrc = btn.getAttribute('data-img');

            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalImg.src = imgSrc;

            modalOverlay.classList.add('open');
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('open');
    };

    modalClose.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
            closeModal();
        }
    });
});
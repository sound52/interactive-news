document.addEventListener('DOMContentLoaded', () => {
    // 요소 참조
    const progressBar = document.getElementById('progressBar');
    const cards = document.querySelectorAll('.card');
    const dynamicImage = document.getElementById('dynamicImage');
    const imageCaption = document.getElementById('imageCaption');

    // 모달 요소 참조
    const hotspotBtns = document.querySelectorAll('.hotspot-btn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    // 카드 단계별 이미지 및 캡션 데이터
    const storyData = {
        1: {
            img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80",
            caption: "해안가 도시의 현재 전경과 침수 위협"
        },
        2: {
            img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
            caption: "도심 열섬 현상과 열기 가득한 빌딩 숲"
        },
        3: {
            img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
            caption: "자연 친화적 스펀지 도시와 공원 조성"
        }
    };

    // 1. 상단 스크롤 진행률 계산
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        progressBar.style.width = scrolled + '%';
    });

    // 2. Intersection Observer를 이용한 스크롤 연동 카드 활성화
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // 화면 중앙 부근에 올 때 감지
        threshold: 0
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 기존 활성화 카드 해제
                cards.forEach(card => card.classList.remove('active'));
                
                // 현재 카드 활성화
                const activeCard = entry.target;
                activeCard.classList.add('active');

                // 해당 단계에 맞는 이미지 변경 (페이드 애니메이션 효과)
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

    // 3. 모달 인터랙션 구현
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

    // 모달 닫기 이벤트
    const closeModal = () => {
        modalOverlay.classList.remove('open');
    };

    modalClose.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // ESC 키 입력 시 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
            closeModal();
        }
    });
});
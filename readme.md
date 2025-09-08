# 🟣 nyeonseok-modal

React 프로젝트에서 **간단하게 모달**을 띄울 수 있는 라이브러리입니다.  
CSS, SVG 등 필요한 리소스는 모달 내부에서 자동으로 처리되므로, **Modal 컴포넌트만 import**하면 바로 사용 가능합니다.

---

## 1️⃣ 설치
**v** 1.0.0

```bash
# 프로젝트에 npm 패키지 설치
npm install

# nyeonseok-modal 라이브러리 설치
npm install nyeonseok-modal
```

<br>

## 2️⃣ Modal import

```typescript
import { useState } from "react";
import { Modal } from "nyeonseok-modal";
```

<br>

## 3️⃣ 상태 설정 (useState)

```typescript
// modal open 상태: true이면 보이고 false이면 숨김
const [isOpen, setIsOpen] = useState(false);

// modal 제목
const [modalTitle, setModalTitle] = useState("");

// modal 내용
const [modalText, setModalText] = useState("");

// 확인 버튼 클릭 시 실행할 함수 (선택 사항)
const [modalOnConfirm, setModalOnConfirm] = useState<(() => void) | null>(null);
```

<br>

## 4️⃣ Modal 렌더링

```typescript
{
  isOpen && (
    <Modal
      setIsOpen={setIsOpen}
      text={modalText}
      title={modalTitle}
      onConfirm={modalOnConfirm || undefined}
    />
  );
}
```
💡 참고 사항
- `modalTitle`, `modalText` 모두 일정 너비를 넘어가면 ... 처리됨.
- `modalText`에 긴 글을 적고싶을 때, `\n` 사용하면 줄바꿈 가능.


<br>

## 5️⃣ Modal 띄우기

```typescript
setModalTitle("모달 Title");
setModalText("모달 Text");
setModalOnConfirm(() => () => {
  // 확인 버튼 클릭 시 실행할 함수
  // 함수가 없으면 단순히 모달 창이 닫힘
});
setIsOpen(true);
```

<br>

## 6️⃣ 예시 코드

```typescript
// src/App.tsx
import { useState } from "react";
import { Modal } from "nyeonseok-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalOnConfirm, setModalOnConfirm] = useState<(() => void) | null>(
    null
  );

  const modalOpen = () => {
    setModalTitle("모달 Title");
    setModalText("모달 Text");
    setModalOnConfirm(() => () => {
      // 확인 버튼 클릭 시 실행할 로직
      // 생략 시 그냥 모달 닫힘
    });
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={modalOpen}>Open Modal</button>

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          text={modalText}
          title={modalTitle}
          onConfirm={modalOnConfirm || undefined}
        />
      )}
    </div>
  );
}

export default App;
```

<br>

## 7️⃣ 예시 화면

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/dddb068a-4249-4212-ba46-dfdb7db44869" />
<img width="1920" height="918" alt="image" src="https://github.com/user-attachments/assets/3efb5f9d-8954-4011-9e71-a3c1e8f80eb7" />

const targetTime = "21:00"; // 변환하려는 시간

const [hours, minutes] = targetTime.split(":").map(Number); // 시간과 분 추출

const targetDate = new Date(); // 현재 날짜와 시간을 기준으로 Date 객체 생성
targetDate.setHours(hours, minutes, 0, 0); // 시간 설정

const targetUnixTime = Math.floor(targetDate.getTime() / 1000); // 유닉스 타임스탬프로 변환
console.log("21:00의 유닉스 타임스탬프:", targetUnixTime);
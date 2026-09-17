import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const money = new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 });
const categories = [
  { percent: 50, purpose: 'ค่าใช้จ่ายจำเป็น', detail: 'ค่าบ้าน • อาหาร • เดินทาง', backgroundColor: '#eaf6ee', color: '#26734b' },
  { percent: 30, purpose: 'ความต้องการส่วนตัว', detail: 'ช้อปปิ้ง • ท่องเที่ยว • ความสุข', backgroundColor: '#fff4e3', color: '#94601c' },
  { percent: 20, purpose: 'เงินออมและลงทุน', detail: 'เก็บออม • ลงทุน • เงินสำรอง', backgroundColor: '#efebfc', color: '#6c50b5' },
];

export default function HomeScreen() {
  const [input, setInput] = useState('5000');
  const [focused, setFocused] = useState(false);
  const { width } = useWindowDimensions();
  const compact = width < 700;
  const parsed = Number(input.trim());
  const salary = Number.isFinite(parsed) ? Math.max(0, parsed) : 0;

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={styles.fill} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={[styles.page, compact && styles.mobilePage]}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag">
          <View style={styles.content}>
            <View style={styles.brandRow}>
              <View style={styles.brandMark}><Text style={styles.brandSymbol}>฿</Text></View>
              <Text style={styles.brand}>เหลือเก็บ</Text>
              <View style={styles.badge}><Text style={styles.badgeText}>50 / 30 / 20</Text></View>
            </View>

            <Text accessibilityRole="header" style={[styles.title, compact && styles.mobileTitle]}>แบ่งเงินให้พอดี{'\n'}มีเหลือเก็บทุกเดือน</Text>
            <Text style={styles.subtitle}>วางแผนรายรับง่าย ๆ ด้วยสูตร 50/30/20</Text>

            <View style={styles.incomeCard}>
              <Text nativeID="salary-label" style={styles.label}>เงินเดือนหรือรายรับทั้งหมด</Text>
              <View style={[styles.inputWrap, focused && styles.focused]}>
                <TextInput
                  accessibilityLabel="เงินเดือนหรือรายรับทั้งหมด (บาท)"
                  accessibilityLabelledBy="salary-label"
                  value={input}
                  onChangeText={setInput}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  inputMode="decimal"
                  keyboardType="decimal-pad"
                  selectTextOnFocus
                  placeholder="0"
                  placeholderTextColor="#aaa3b6"
                  style={styles.input}
                />
                <Text style={styles.unit}>บาท</Text>
              </View>
              <Text style={styles.hint}>กรอกรายรับ แล้วดูสัดส่วนเงินของคุณด้านล่าง</Text>
            </View>

            <View style={styles.sectionHeading}>
              <Text accessibilityRole="header" style={styles.sectionTitle}>แผนแบ่งเงินของคุณ</Text>
              <Text style={styles.sectionNote}>ต่อเดือน</Text>
            </View>
            <View style={[styles.results, compact && styles.stacked]} accessibilityLiveRegion="polite">
              {categories.map(({ percent, purpose, detail, backgroundColor, color }) => (
                <View key={percent} style={[styles.card, { backgroundColor }, compact && styles.mobileCard]}>
                  <View style={styles.cardHeading}>
                    <View style={styles.percentBadge}><Text style={[styles.percent, { color }]}>{percent}%</Text></View>
                    <View style={styles.cardLabels}>
                      <Text style={[styles.purpose, { color }]}>{purpose}</Text>
                      <Text style={[styles.detail, { color }]}>{detail}</Text>
                    </View>
                  </View>
                  <Text style={[styles.amount, { color }]}>{money.format(salary * (percent / 100))}<Text style={styles.amountUnit}> บาท</Text></Text>
                  <View style={styles.track}><View style={[styles.progress, { backgroundColor: color, width: `${percent}%` }]} /></View>
                </View>
              ))}
            </View>
            <View style={styles.summary} accessibilityLiveRegion="polite">
              <Text style={styles.summaryLabel}>รวมรายรับทั้งหมด</Text>
              <Text style={styles.summaryAmount}>{money.format(salary)} บาท</Text>
            </View>
            <Text style={styles.footer}>เริ่มแบ่งวันนี้ เพื่อความสบายใจในวันข้างหน้า</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  background: { flex: 1, backgroundColor: '#f8f7fc' },
  page: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  mobilePage: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 28, justifyContent: 'flex-start' },
  content: { width: '100%', maxWidth: 1000 },
  brandRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 28 },
  brandMark: { width: 34, height: 34, borderRadius: 11, backgroundColor: '#7460b8', alignItems: 'center', justifyContent: 'center' },
  brandSymbol: { color: '#fff', fontSize: 23, fontWeight: '700' },
  brand: { color: '#302742', fontSize: 19, fontWeight: '700' },
  badge: { marginLeft: 'auto', backgroundColor: '#eeebf7', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7 },
  badgeText: { fontSize: 12, color: '#75648e', fontWeight: '600' },
  title: { fontSize: 40, fontWeight: '800', color: '#302742', lineHeight: 54, letterSpacing: -0.5 },
  mobileTitle: { fontSize: 30, lineHeight: 43 },
  subtitle: { color: '#80758f', fontSize: 14, lineHeight: 23, marginTop: 10, marginBottom: 26 },
  incomeCard: { padding: 20, backgroundColor: '#fff', borderRadius: 24, borderWidth: 1, borderColor: '#efecf5', boxShadow: '0 6px 24px rgba(61, 43, 97, 0.04)' },
  label: { color: '#544762', fontSize: 14, fontWeight: '600', marginBottom: 12 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#e8e2f2', backgroundColor: '#fbfaff', borderRadius: 16 },
  focused: { borderColor: '#8b70ca' },
  input: { flex: 1, minWidth: 0, paddingVertical: 14, paddingHorizontal: 16, fontSize: 32, fontWeight: '700', color: '#483765', outlineWidth: 0, fontVariant: ['tabular-nums'] },
  unit: { color: '#8a7d9c', fontSize: 15, marginRight: 16 },
  hint: { marginTop: 12, color: '#8a8096', fontSize: 12, lineHeight: 20 },
  sectionHeading: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 28, marginBottom: 14 },
  sectionTitle: { color: '#44384f', fontSize: 17, fontWeight: '700' },
  sectionNote: { color: '#90859c', fontSize: 12 },
  results: { flexDirection: 'row', gap: 12 },
  stacked: { flexDirection: 'column' },
  card: { flex: 1, minWidth: 0, padding: 20, borderRadius: 22 },
  mobileCard: { flex: 0, padding: 18 },
  cardHeading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  percentBadge: { backgroundColor: '#ffffffa6', paddingHorizontal: 9, paddingVertical: 10, borderRadius: 13 },
  percent: { fontSize: 19, fontWeight: '800' },
  cardLabels: { flex: 1, minWidth: 0, gap: 3 },
  purpose: { fontSize: 15, fontWeight: '700' },
  detail: { fontSize: 11, lineHeight: 18 },
  amount: { fontSize: 29, fontWeight: '800', marginTop: 14, marginBottom: 14, fontVariant: ['tabular-nums'] },
  amountUnit: { fontSize: 14, fontWeight: '500' },
  track: { height: 4, borderRadius: 2, backgroundColor: '#ffffff99', overflow: 'hidden' },
  progress: { height: 4, borderRadius: 2, opacity: 0.55 },
  summary: { marginTop: 18, padding: 18, borderRadius: 18, backgroundColor: '#eeebf5', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  summaryLabel: { color: '#7d708e', fontSize: 13 },
  summaryAmount: { color: '#514064', fontSize: 18, fontWeight: '700', flexShrink: 1 },
  footer: { textAlign: 'center', color: '#93889e', fontSize: 12, lineHeight: 20, marginTop: 22 },
});

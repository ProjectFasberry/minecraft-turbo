import { PaymentMeta, publishPaymentNotify } from "#/lib/publishers/pub-payment-notify"
import { callBroadcast } from "../server/call-broadcast"
import { callServerCommand } from "../server/call-command"
import { giveCharism } from "../server/give-charism"

export async function processCharismPayment({
  nickname, paymentType, paymentValue
}: PaymentMeta) {
  const value = Number(paymentValue)
  const message = `Игрок ${nickname} приобрел ${paymentValue} ед. харизмы`

  await Promise.all([
    giveCharism(nickname, value),
    callServerCommand({ parent: "cmi", value: `toast ${nickname} Поздравляем с покупкой` }),
    callBroadcast(message),
  ])

  publishPaymentNotify({ nickname, paymentType, paymentValue })
}
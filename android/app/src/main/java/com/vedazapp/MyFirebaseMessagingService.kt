package com.vedazapp

import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat

class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)

        Log.d("FCM", "Message received: ${remoteMessage.data}")

        val title = remoteMessage.notification?.title ?: "VedazApp"
        val body = remoteMessage.notification?.body ?: "You have a message"

        createNotificationChannel()

        val builder = NotificationCompat.Builder(this, "default")
            .setSmallIcon(R.drawable.ic_launcher) // Change to your app icon
            .setContentTitle(title)
            .setContentText(body)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)

        val notificationId = System.currentTimeMillis().toInt()
        with(NotificationManagerCompat.from(this)) {
            notify(notificationId, builder.build())
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "Default Channel"
            val descriptionText = "General notifications"
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel("default", name, importance).apply {
                description = descriptionText
            }
            val notificationManager: NotificationManager =
                getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }
}

#!/usr/bin/env python
# coding: utf-8

# In[1]:


from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import re


# In[2]:


access_token = "1197821722042482688-pxwPCyCR7T5Zb7kMqyFWmKlMVyGVk1"
access_token_secret = "nf2FDCcBFyYzIascpJy9JxZo1h2Eeozr9cxZ11ebOawMy"
consumer_key = "scE18RkIo0BolMD3KgkZXLCxG"
consumer_secret = "oUQGgSKITE5Nz3Z8eOR4zlEvj3PVkgyEC1AqTEsLpP4EMMTnSi"


# In[3]:


tracklist = ['#iphone11']


# In[4]:


tweet_count = 0
# Input number of tweets to be downloaded
n_tweets = 1000


# In[5]:


class StdOutListener(StreamListener):
      
    def on_data(self, data):
        global tweet_count
        global n_tweets
        global stream
        if tweet_count < n_tweets:
            print(data)
            tweet_count += 1
            return True
        else:
            stream.disconnect()

    def on_error(self, status):
        print(status)


# In[6]:


l = StdOutListener()


# In[7]:


auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)


# In[8]:


stream = Stream(auth, l)
stream.filter(track=tracklist)


# In[ ]:





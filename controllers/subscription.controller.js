import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const publishResponse = await workflowClient.publishJSON({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`, body: {
        subscriptionId: subscription._id,
      }, headers: {
        "Content-Type": "application/json",
      },
      retries: 0,
    });

    res.status(201).json({
      success: true,
      subscription,
      workflowRunId: publishResponse.messageId,
    });
  } catch (e) {
    next(e);
  }
}

export const getUserSubscription = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the awner of this account");
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({ success: true, subscription: subscriptions });
  } catch (e) {
    next(e)
  }
}